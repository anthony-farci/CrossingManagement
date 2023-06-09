﻿// <auto-generated />
using CrossingManagement.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CrossingManagement.Migrations
{
    [DbContext(typeof(RailroadContext))]
    [Migration("20230511175307_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CrossingManagement.Models.RailroadCrossing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("fld_actief_passief")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fld_geo_x")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fld_geo_y")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fld_naam_ramses")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("fld_postcode_en_gemeente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("lat")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("lon")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("type_lc")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type_pn")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("RailroadCrossings");
                });
#pragma warning restore 612, 618
        }
    }
}
