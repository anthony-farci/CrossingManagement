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

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetRailroadById([FromRoute] int id)
    {
        var railroadCrossing = await _context.RailroadCrossings.FirstOrDefaultAsync(x => x.Id == id);
        if (railroadCrossing == null)
        {
            return NotFound();
        }
        return Ok(railroadCrossing);
    }

    [HttpPut]
    [Route("{id:int}")]
    public async Task<IActionResult> UpdateRailroadCrossing([FromRoute] int id, RailroadCrossing updateRailroadCrossingRequest)
    {
        var railroadCrossing = await _context.RailroadCrossings.FindAsync(id);
        if (railroadCrossing == null)
        {
            return NotFound();
        }
        railroadCrossing.fld_naam_ramses = updateRailroadCrossingRequest.fld_naam_ramses;
        railroadCrossing.fld_actief_passief = updateRailroadCrossingRequest.fld_actief_passief;
        railroadCrossing.type_pn = updateRailroadCrossingRequest.type_pn;
        railroadCrossing.fld_geo_x = updateRailroadCrossingRequest.fld_geo_x;
        railroadCrossing.fld_geo_y = updateRailroadCrossingRequest.fld_geo_y;
        railroadCrossing.fld_postcode_en_gemeente = updateRailroadCrossingRequest.fld_postcode_en_gemeente;
        railroadCrossing.type_lc = updateRailroadCrossingRequest.type_lc;
        railroadCrossing.lat = updateRailroadCrossingRequest.lat;
        railroadCrossing.lon = updateRailroadCrossingRequest.lon;

        await _context.SaveChangesAsync();
        return Ok(railroadCrossing);
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> DeleteRailroadCrossing([FromRoute] int id)
    {
        var railroadCrossing = await _context.RailroadCrossings.FindAsync(id);
        if (railroadCrossing == null)
        {
            return NotFound();
        }
        _context.RailroadCrossings.Remove(railroadCrossing);
        await _context.SaveChangesAsync();

        return Ok(railroadCrossing);
    }

    [HttpPost]
    [Route("fill")]
    public async Task<IActionResult> fillDatabase([FromBody] RailroadCrossing[] railroadCrossings)
    {
        _context.RailroadCrossings.RemoveRange(_context.RailroadCrossings);
        _context.RailroadCrossings.AddRange(railroadCrossings);
        await _context.SaveChangesAsync();
        return Ok();
    }
}