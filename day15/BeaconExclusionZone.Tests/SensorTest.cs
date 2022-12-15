namespace BeaconExclusionZone.Tests;

public class SensorTest
{
    [Fact]
    public void TestSensorConstructor()
    {
        Sensor result = new Sensor("Sensor at x=2, y=18: closest beacon is at x=-2, y=15");
        Sensor expected = new Sensor { X = 2, Y = 18, BeaconX = -2, BeaconY = 15 };

        Assert.Equal(expected.X, result.X);
        Assert.Equal(expected.Y, result.Y);
        Assert.Equal(expected.BeaconX, result.BeaconX);
        Assert.Equal(expected.BeaconY, result.BeaconY);
    }

    [Fact]
    public void TestSensorConstructorWithNegativeValues()
    {
        Sensor result = new Sensor("Sensor at x=-17, y=-20: closest beacon is at x=-21, y=-22");
        Sensor expected = new Sensor { X = -17, Y = -20, BeaconX = -21, BeaconY = -22 };

        Assert.Equal(expected.X, result.X);
        Assert.Equal(expected.Y, result.Y);
        Assert.Equal(expected.BeaconX, result.BeaconX);
        Assert.Equal(expected.BeaconY, result.BeaconY);
    }

    [Fact]
    public void TestSensorConstructorDistanceProp()
    {
        int result = new Sensor("Sensor at x=0, y=0: closest beacon is at x=6, y=6").Distance;
        int expected = 12;

        Assert.Equal(expected, result);
    }

    [Fact]
    public void TestSensorConstructorDistanceProp2()
    {
        int result = new Sensor("Sensor at x=2, y=2: closest beacon is at x=6, y=6").Distance;
        int expected = 8;

        Assert.Equal(expected, result);
    }

    [Fact]
    public void TestSensorConstructorDistanceProp3()
    {
        int result = new Sensor("Sensor at x=12, y=12: closest beacon is at x=6, y=6").Distance;
        int expected = 12;

        Assert.Equal(expected, result);
    }
}