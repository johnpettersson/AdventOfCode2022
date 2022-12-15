
public class Sensor
{
    public int X { get; set; }
    public int Y { get; set; }

    public int BeaconX { get; set; }
    public int BeaconY { get; set; }

    public int Distance { get; set; }

    public Sensor(string line)
    {
        int index = line.IndexOf("x") + 2;
        int end = line.IndexOf(",");

        X = int.Parse(line.Substring(index, end - index));

        index = line.IndexOf("y") + 2;
        end = line.IndexOf(":");

        Y = int.Parse(line.Substring(index, end - index));

        index = line.LastIndexOf("x") + 2;
        end = line.LastIndexOf(",");

        BeaconX = int.Parse(line.Substring(index, end - index));

        index = line.LastIndexOf("y") + 2;
        BeaconY = int.Parse(line.Substring(index));

        Distance = Math.Abs(X - BeaconX) + Math.Abs(Y - BeaconY);
    }

    public int ManhattanDistanceTo(int x2, int y2)
    {
        return Math.Abs(X - x2) + Math.Abs(Y - y2);
    }

    public Sensor() {}
}