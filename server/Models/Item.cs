namespace server.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string NameItem { get; set; }
        public int Price { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public int depth { get; set; }
        public string? img_link { get; set; }

    }
}
