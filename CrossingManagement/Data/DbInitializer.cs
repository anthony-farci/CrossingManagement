using CrossingManagement.Models;

namespace CrossingManagement.Data
{
    public static class DbInitializer
    {
        public static void Initialize(RailroadContext context)
        {

            if (context.RailroadCrossings.Any())
            {
                return;   // DB has been seeded
            }

            var railroadCrossings = new RailroadCrossing[]
            {
                new RailroadCrossing
                    {
                        fld_naam_ramses = "L-209-8",
                        fld_actief_passief = "Passive signalling",
                        type_pn = "Passive signalling",
                        fld_geo_x = "57",
                        fld_geo_y = "62",
                        fld_postcode_en_gemeente = "9120 MELSELE(BEVEREN)",
                        type_lc = "Passive signalling",
                        lat = 57,
                        lon = 62
        }
            };

            context.RailroadCrossings.AddRange(railroadCrossings);
            context.SaveChanges();
        }
    }
}