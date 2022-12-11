

var monkeyStrings = File.ReadAllText("input.txt").Split(Environment.NewLine + Environment.NewLine);

List<Monkey> monkeys = new List<Monkey>();

foreach(var monkeyText in monkeyStrings)
{
    monkeys.Add(new Monkey(monkeyText, monkeys));
}

Monkey.MAX_SIZE = monkeys.Select(monkey => monkey.Divisor).Distinct().Aggregate(1, (a, b) => a * b);

for (int i = 0; i < 10_000; i++)
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

int[] top2 = monkeys.Select(monkey => monkey.ItemsInspected).OrderDescending().Take(2).ToArray();
long levelOfMonkeyBusiness = (long)top2[0] * (long)top2[1];
Console.WriteLine("The level of monkeybusiness is: " + levelOfMonkeyBusiness);

class Monkey
{
    public static int MAX_SIZE = 1;
    public List<Monkey> OtherMonkeys { get; set; }
    public Queue<int> Inventory { get; set; }
    public int Divisor { get; private set; }

    private string name;
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
        Divisor = int.Parse(lines[3].Split().Last());
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
            item %= MAX_SIZE;
            item = HandleOperation(item);
            
            ThrowItem(item);
        }
    }

    private int HandleOperation(int item)
    {
        if(operation.Contains("+"))
            return item + operand;
        else if(operation.Contains("old * old"))
            return (int)(((long)item * (long)item) % (long)MAX_SIZE) ;
        else if(operation.Contains("*"))
            return item * operand;

        throw new Exception("Unknown operator");
    }

    private void ThrowItem(int item)
    {
        if(item % Divisor == 0)
            OtherMonkeys[monkeyIndexToThrowIfTrue].Inventory.Enqueue(item);
        else
            OtherMonkeys[monkeyIndexToThrowIfFalse].Inventory.Enqueue(item);
    }
}