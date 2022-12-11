var lines = File.ReadAllLines("input.txt").ToList();

int cycle = 0;
int spriteX = 1;

var result = new List<string> { "", "", "", "", "", "" };

foreach(var line in lines)
{
    string[] parts = line.Split();
    string command = parts[0];

    if(command == "noop")
    {
        updateCycle();
    }
    else if(command == "addx")
    {
        updateCycle();
        updateCycle();
        spriteX += int.Parse(parts[1]);
    }
}

foreach(var l in result)
{
    foreach(char c in l)
    {
        if(c == '#')
            Console.BackgroundColor = ConsoleColor.DarkRed;
        else
            Console.BackgroundColor = ConsoleColor.Black;

        Console.Write(" ");
    }
    Console.WriteLine();
}

void updateCycle()
{
    cycle += 1;

    int lineIndex = (cycle-1) / 40;
    int currentX = cycle % 40;

    if(currentX == spriteX || currentX == spriteX+1 || currentX == spriteX+2) 
        result[lineIndex] += "#";
    else
        result[lineIndex] += ".";
}