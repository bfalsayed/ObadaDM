using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("calender_dim")]
    public class Calendar
    {
        [Key]
        [Column("item_id")]
        public int ItemId { get; set; }
        
        [Column("title")]
        public string Title { get; set; }
        
        [Column("description")]
        public string Description { get; set; }
        
        [Column("week_day")]
        public string WeekDay { get; set; }
        
        [Column("time_from")]
        public TimeSpan? From { get; set; }
        
        [Column("time_to")]
        public TimeSpan? To { get; set; }
        
        [Column("flag")]
        public int Flag { get; set; }
        
        [Column("flag_description")]
        public string FlagDescription { get; set; }
        
        [Column("start_date")]
        public DateTime StartDate { get; set; }
        
        [Column("end_date")]
        public DateTime EndDate { get; set; }
    }
}