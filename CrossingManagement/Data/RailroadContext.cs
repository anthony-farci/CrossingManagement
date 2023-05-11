using Microsoft.EntityFrameworkCore;

namespace CrossingManagement.Data;

public class RailroadContext : DbContext
{
    public RailroadContext(DbContextOptions<RailroadContext> options)
    : base(options)
    {
    }
}