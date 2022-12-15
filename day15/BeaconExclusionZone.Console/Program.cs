

var lines = File.ReadAllLines("input.txt");

List<Sensor> sensors = new List<Sensor>();

foreach (var line in lines)
{
    sensors.Add(new Sensor(line));
}


const int y = 2000000;



List<int> invalidXPositions = new List<int>();

foreach(Sensor sensor in sensors)
{
    int min = sensor.X - sensor.Distance;
    int max = sensor.X + sensor.Distance;

    for (int x = min; x < max; x++)
    {
        if (!(sensor.BeaconX == x && sensor.BeaconY == y) &&
            !(sensor.X == x && sensor.X == y))
        {
            int distance = sensor.ManhattanDistanceTo(x, y);

            if (distance <= sensor.Distance)
                invalidXPositions.Add(x);
        }
    }
}

int result = invalidXPositions.Distinct().Count();
Console.WriteLine(result);