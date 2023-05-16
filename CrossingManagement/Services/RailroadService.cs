/*using CrossingManagement.Models;
using CrossingManagement.Data;
using Microsoft.EntityFrameworkCore;

namespace CrossingManagement.Service;

public class RailroadService
{

    private readonly RailroadContext _context;

    public RailroadService(RailroadContext context)
    {
        _context = context;
    }

    public IEnumerable<RailroadCrossing> GetAllRailroadCrossings()
    {
        return _context.RailroadCrossings.AsNoTracking().ToList();
    }

    public RailroadCrossing Create(RailroadCrossing newRailroadCrossing)
    {
        _context.RailroadCrossings.Add(newRailroadCrossing);
        _context.SaveChanges();

        return newRailroadCrossing;
    }
    public void DeleteById(int id)
    {
        var railroadToDelete = _context.RailroadCrossings.Find(id);
        if (railroadToDelete is not null)
        {
            _context.RailroadCrossings.Remove(railroadToDelete);
            _context.SaveChanges();
        }
    }
}*/