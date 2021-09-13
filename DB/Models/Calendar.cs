using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DB.Models
{
    [Table("calendar_dim")]
    public class Calendar
    {
        [Key]
        [Column("item_id")]
        public int ItemId { get; set; }
    }
}