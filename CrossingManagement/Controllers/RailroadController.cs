using CrossingManagement.Data;
using CrossingManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrossingManagement.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RailroadController : Controller
{
    private readonly RailroadContext _context;
    public RailroadController(RailroadContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllRailroadCrossings()
    {
        var railroadCrossings = await _context.RailroadCrossings.ToListAsync();
        return Ok(railroadCrossings);
    }

    [HttpPost]
    public async Task<IActionResult> AddRailroadCrossing([FromBody] RailroadCrossing railroadCrossingRequest)
    {
        await _context.RailroadCrossings.AddAsync(railroadCrossingRequest);
        await _context.SaveChangesAsync();

        return Ok(railroadCrossingRequest);
    }
}