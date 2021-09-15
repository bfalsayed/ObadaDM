using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("research_interest_dim")]
    public class ResearchArea
    {
        [Key]
        [Column("research_area_id")]
        public int Id { get; set; }

        [Column("research_area_title")]
        public string Title { get; set; }
        
        [Column("research_area_description")]
        public string Description { get; set; }
    }
}