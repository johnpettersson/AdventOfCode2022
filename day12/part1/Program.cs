
List<string> mapRows = File.ReadAllLines("input.txt").ToList();

int maxX = mapRows[0].Length;
int maxY = mapRows.Count();

char[,] charMap = new char[maxY, maxX];

Node[,] graph = new Node[maxY, maxX];
Node goal = new Node();
Node root = new Node();

for (int x = 0; x < maxX; x++)
{
    for (int y = 0; y < maxY; y++)
    {
        char currentChar = mapRows[y][x];
        Node newNode = new Node();
        graph[y, x] = newNode;

        if(currentChar == 'S')
        {
            currentChar = 'a';
            root = newNode;
            newNode.Explored = true;
        }
        else if(currentChar == 'E')
        {
            goal = newNode;
            currentChar = 'z';
        }

        charMap[y, x] = currentChar;
    }
}

for (int x = 0; x < maxX; x++)
{
    for (int y = 0; y < maxY; y++)
    {
        Node currentNode = graph[y, x];
        char next;
        char current = charMap[y, x];

        if (IsInBounds(x - 1, y))
        {
            next = charMap[y, x - 1];
            if (IsValidElevation(current, next))
                currentNode.Edges.Add(graph[y, x - 1]);
        }
        if (IsInBounds(x + 1, y))
        {
            next = charMap[y, x + 1];
            if (IsValidElevation(current, next))
                currentNode.Edges.Add(graph[y, x + 1]);
        }
        if (IsInBounds(x, y - 1))
        {
            next = charMap[y - 1, x];
            if (IsValidElevation(current, next))
                currentNode.Edges.Add(graph[y - 1, x]);
        }
        if (IsInBounds(x, y + 1))
        {
            next = charMap[y + 1, x];
            if (IsValidElevation(current, next))
                currentNode.Edges.Add(graph[y + 1, x]);
        }
    }
}

Console.WriteLine("Searching...");
int shortestPath = BFS(root);
Console.WriteLine(shortestPath);


int BFS(Node root)
{
    Queue<Node> queue = new Queue<Node>();
    root.Explored = true;
    queue.Enqueue(root);

    while (queue.Count() > 0)
    {
        Node v = queue.Dequeue();
        if (v == goal)
        {
            Console.WriteLine("Found the goal!");
            break;
        }

        foreach (Node w in v.Edges)
        {
            if (!w.Explored)
            {
                w.Explored = true;
                w.Parent = v;
                queue.Enqueue(w);
            }
        }
    }

    int steps = 0;
    Node p = goal;
    while (p.Parent is not null)
    {
        steps++;
        p = p.Parent;
    }
    return steps;
}
// Pseudokod från wikipedia https://en.wikipedia.org/wiki/Breadth-first_search
//  1  procedure BFS(G, root) is
//  2      let Q be a queue
//  3      label root as explored
//  4      Q.enqueue(root)
//  5      while Q is not empty do
//  6          v := Q.dequeue()
//  7          if v is the goal then
//  8              return v
//  9          for all edges from v to w in G.adjacentEdges(v) do
// 10              if w is not labeled as explored then
// 11                  label w as explored
// 12                  w.parent := v
// 13                  Q.enqueue(w)

bool IsInBounds(int x, int y) => x >= 0 && x < maxX && y >= 0 && y < maxY;

bool IsValidElevation(char current, char next) => next - current <= 1;


class Node
{
    public bool Explored { get; set; }
    public List<Node> Edges { get; set; } = new List<Node>();
    public Node? Parent { get; set; }
}