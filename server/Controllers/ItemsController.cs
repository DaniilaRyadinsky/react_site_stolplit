using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.DataProtection.XmlEncryption;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : Controller
    {
        private readonly Context _context;

        public ItemsController(Context context)
        {
            _context = context;
        }

        // GET: Items
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            return await _context.Items.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItems(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var item = await _context.Items.FirstOrDefaultAsync(m => m.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        [HttpPost]
        public async Task<ActionResult<Item>> CreateItem(Item item)
        {
            Item ItemCheck = _context.Items.FirstOrDefault(x=> x.Id == item.Id);
            if (ItemCheck != null)
                return Content("Item exist");
             _context.Items.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetItems", new { id = item.Id }, item);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Items.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<ActionResult<int>> UpdateItem(int id, Item product)
        {
            var item = await _context.Items.FirstOrDefaultAsync(m => m.Id == id);
            if (item is null)
                return BadRequest();

            // Обновление свойств продукта
            item.NameItem = product.NameItem;
            item.Price = product.Price;
            item.width = product.width;
            item.height = product.height;
            item.depth = product.depth;
            item.img_link = product.img_link;

            await _context.SaveChangesAsync();
            return Ok(id);
        }

        private bool ItemExists(int id)
        {
            return _context.Items.Any(e => e.Id == id);
        }
    }
}
