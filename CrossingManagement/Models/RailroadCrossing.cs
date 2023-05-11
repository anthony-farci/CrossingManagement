using System.ComponentModel.DataAnnotations;

namespace CrossingManagement.Models;

public class RailroadCrossing
{
    public int Id { get; set; }
    [Required]
    public string? fld_naam_ramses { get; set; }
    [Required]
    public string? fld_actief_passief { get; set; }
    [Required]
    public string? type_pn { get; set; }
    [Required]
    public string? fld_geo_x { get; set; }
    [Required]
    public string? fld_geo_y { get; set; }
    [Required]
    public string? fld_postcode_en_gemeente { get; set; }
    [Required]
    public string? type_lc { get; set; }
    [Required]
    public decimal lat { get; set; }
    [Required]
    public decimal lon { get; set; }
}