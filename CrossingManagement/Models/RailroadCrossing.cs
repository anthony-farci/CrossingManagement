namespace CrossingManagement.Models;

public class RailroadCrossing
{
    public int Id { get; set; }
    public string? fld_naam_ramses { get; set; }
    public string? fld_actief_passief { get; set; }
    public string? type_pn { get; set; }
    public string? fld_geo_x { get; set; }
    public string? fld_geo_y { get; set; }
    public string? fld_postcode_en_gemeente { get; set; }
    public string? type_lc { get; set; }
    public decimal lat { get; set; }
    public decimal lon { get; set; }
}