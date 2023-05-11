using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CrossingManagement.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RailroadCrossings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    fld_naam_ramses = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fld_actief_passief = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    type_pn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fld_geo_x = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fld_geo_y = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fld_postcode_en_gemeente = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    type_lc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lat = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    lon = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RailroadCrossings", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RailroadCrossings");
        }
    }
}
