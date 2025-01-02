using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusketsController : ControllerBase
    {
        private readonly Context _context;

        public BusketsController(Context context)
        {
            _context = context;
        }

        // GET: api/Buskets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Busket>>> GetBuskets()
        {
            return await _context.Buskets.ToListAsync();
        }

        //// GET: api/Buskets/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Busket>> GetBusket(int id)
        //{
        //    var busket = await _context.Buskets.FindAsync(id);

        //    if (busket == null)
        //    {
        //        return NotFound();
        //    }

        //    return busket;
        //}

        // PUT: api/Buskets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusket(int id, Busket busket)
        {
            if (id != busket.Id)
            {
                return BadRequest();
            }

            _context.Entry(busket).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusketExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Buskets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Busket>> PostBusket(Busket busket)
        {
            Busket ItemCheck = _context.Buskets.FirstOrDefault(x => x.Id == busket.Id);
            if (ItemCheck != null)
                return Content("Item exist");
            _context.Buskets.Add(busket);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetBusket", new { id = busket.Id });
        }

        // DELETE: api/Buskets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusket(int id)
        {
            var busket = await _context.Buskets.FindAsync(id);
            if (busket == null)
            {
                return NotFound();
            }

            _context.Buskets.Remove(busket);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BusketExists(int id)
        {
            return _context.Buskets.Any(e => e.Id == id);
        }
    }
}
