using Microsoft.EntityFrameworkCore;
using CrossingManagement.Models;

namespace CrossingManagement.Data;

public class RailroadContext : DbContext
{
    public RailroadContext(DbContextOptions<RailroadContext> options)
    : base(options)
    {
    }

    public DbSet<RailroadCrossing> RailroadCrossings => Set<RailroadCrossing>();
}