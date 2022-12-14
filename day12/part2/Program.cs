
List<string> mapRows = File.ReadAllLines("input.txt").ToList();

int maxX = mapRows[0].Length;
int maxY = mapRows.Count();

char[,] charMap = new char[maxY, maxX];

Node[,] graph = new Node[maxY, maxX];
Node goal = new Node();
List<Node> roots = new List<Node>();

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
        }
        else if(currentChar == 'E')
        {
            goal = newNode;
            currentChar = 'z';
        }

        if(currentChar == 'a')
        {
            newNode.Explored = true;
            roots.Add(newNode);
        }
        charMap[y, x] = currentChar;
    }
}

//build graph
for (int x = 0; x < maxX; x++)
{
    for (int y = 0; y < maxY; y++)
    {
        Node currentNode = graph[y, x];
        char current = charMap[y, x];
        char next;

        if (IsInBounds(x - 1, y)) //connect node with left side
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
int result = BFSStepsBetweenNodes(roots, goal);
Console.WriteLine(result);

int BFSStepsBetweenNodes(List<Node> roots, Node target)
{
    Queue<Node> queue = new Queue<Node>(roots);
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