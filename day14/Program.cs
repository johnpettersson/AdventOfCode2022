
const int mapWidth = 1000;
const int mapHeight = 180;

char[][] map = new char[mapHeight][];

for (int y = 0; y < mapHeight; y++)
{
    map[y] = new char[mapWidth];

    for (int x = 0; x < mapWidth; x++)
    {
        map[y][x] = '.';
    }
}

List<List<Vec2>> nodes = new List<List<Vec2>>();

int highestY = 0;

var input = File.ReadAllLines("input.txt");
foreach (var line in input)
{
    var coords = line.Split(" -> ");
    List<Vec2> path = new List<Vec2>();

    foreach (string coord in coords)
    {
        string[] split = coord.Split(',');
        Vec2 pos = new Vec2(int.Parse(split[0]), int.Parse(split[1]));
        path.Add(pos);

        if(pos.Y > highestY)
            highestY = pos.Y;
    }
    nodes.Add(path);
}

for (int x = 0; x < mapWidth; x++)
{
    map[highestY + 2][x] = '#';
}

nodes.ForEach(AddPathToMap);

bool sandOverflowed = false;
int sandCount = GetSandCount();
Console.WriteLine($"Sand overflowed after {sandCount} sands");

int GetSandCount()
{
    int count = 0;

    while (!sandOverflowed)
    {
        Vec2 sandPos = new Vec2(500, 0);
        bool landed = false;

        while (!landed)
        {
            while (map[sandPos.Y + 1][sandPos.X] == '.') //fall down
            {
                sandPos.Y++;

                if (sandPos.Y + 1 == mapHeight) //sand overflowed
                {
                    return count;
                }
            }

            if (!sandOverflowed && map[sandPos.Y + 1][sandPos.X - 1] == '.') //left-down is free
            {
                sandPos.Y++;
                sandPos.X--;
            }
            else if (!sandOverflowed && map[sandPos.Y + 1][sandPos.X + 1] == '.') //right down is free
            {
                sandPos.Y++;
                sandPos.X++;
            }
            else
            {
                landed = true;
            }
        }

        count++;
        map[sandPos.Y][sandPos.X] = 'o';

        if(sandPos.X == 500 && sandPos.Y == 0)
            return count;
    }

    return -1;
}

var lines = map.Select(lineArr => String.Join("", lineArr)).ToArray();
File.WriteAllLines("output.txt", lines);

void AddPathToMap(List<Vec2> path)
{
    Vec2 curr = path[0];
    Vec2 next;
    int i = 1;

    while (i < path.Count)
    {
        next = path[i++];
        map[curr.Y][curr.X] = '#';

        while (curr.X != next.X) //draw horizontal line
        {
            if (curr.X < next.X)
                curr.X++;
            else if (curr.X > next.X)
                curr.X--;

            map[curr.Y][curr.X] = '#';
        }

        while (curr.Y != next.Y) // draw vertical line
        {
            if (curr.Y < next.Y)
                curr.Y++;
            else if (curr.Y > next.Y)
                curr.Y--;

            map[curr.Y][curr.X] = '#';
        }

        curr = next;
    }
}

class Vec2
{
    public int X { get; set; }
    public int Y { get; set; }

    public Vec2(int x, int y)
    {
        this.X = x;
        this.Y = y;
    }
}