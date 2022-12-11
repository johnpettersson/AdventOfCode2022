

var monkeyStrings = File.ReadAllText("input.txt").Split(Environment.NewLine + Environment.NewLine);

List<Monkey> monkeys = new List<Monkey>();

foreach(var monkeyText in monkeyStrings)
{
    monkeys.Add(new Monkey(monkeyText, monkeys));
}

for (int i = 0; i < 20; i++)
{
    foreach(var monkey in monkeys)
    {
        monkey.Update();
    }
}

foreach(var monkey in monkeys)
{
    Console.WriteLine(monkey);
}

int levelOfMonkeyBusiness = monkeys.Select(monkey => monkey.ItemsInspected).OrderDescending().Take(2).Aggregate(1, (a, b) => a * b);

Console.WriteLine("The level of monkeybusiness is: " + levelOfMonkeyBusiness);


class Monkey
{
    public List<Monkey> OtherMonkeys { get; set; }
    public Queue<int> Inventory { get; set; }

    private string name;
    private int divisibleTestNumber;
    private int monkeyIndexToThrowIfTrue;
    private int monkeyIndexToThrowIfFalse;
    private string operation;
    private int operand;

    public int ItemsInspected { get; private set; }

   
    public Monkey(string text, List<Monkey> otherMonkeys)
    {
        this.OtherMonkeys = otherMonkeys;

        string[] lines = text.Split(Environment.NewLine, StringSplitOptions.TrimEntries);

        name = lines[0];
        Inventory = new Queue<int>(lines[1].Substring(15).Split(", ").Select(t => int.Parse(t)));
        operation = lines[2].Substring(10).Trim();
        int.TryParse(lines[2].Split().Last(), out operand);
        divisibleTestNumber = int.Parse(lines[3].Split().Last());
        monkeyIndexToThrowIfTrue = int.Parse(lines[4].Split().Last());
        monkeyIndexToThrowIfFalse = int.Parse(lines[5].Split().Last());
    }

    public override string ToString()
    {
        return $"{name} Inv: {String.Join(", ", Inventory)} Items inspected: {ItemsInspected}";
    }

    public void Update()
    {
        ItemsInspected += Inventory.Count;

        while(Inventory.Count != 0)
        {
            int item = Inventory.Dequeue();

            item = HandleOperation(item);
            item = item / 3;
            ThrowItem(item);
        }
    }

    private int HandleOperation(int item)
    {
        if(operation.Contains("+"))
            return item + operand;
        else if(operation.Contains("old * old"))
            return item * item;
        else if(operation.Contains("*"))
            return item * operand;

        throw new Exception("Unknown operator");
    }

    private void ThrowItem(int item)
    {
        if(item % divisibleTestNumber == 0)
            OtherMonkeys[monkeyIndexToThrowIfTrue].Inventory.Enqueue(item);
        else
            OtherMonkeys[monkeyIndexToThrowIfFalse].Inventory.Enqueue(item);
    }
}