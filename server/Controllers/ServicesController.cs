using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : Controller
    {
        private readonly Context _context;

        public ServicesController(Context context)
        {
            _context = context;
        }

        // GET: Services
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Service>>> GetServices()
        {
            return await _context.Services.ToListAsync();
        }

        // GET: Services/Details/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> GetServices(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var services = await _context.Services.FirstOrDefaultAsync(m => m.Id == id);
            if (services == null)
            {
                return NotFound();
            }

            return services;
        }

        [HttpPost]
        public async Task<ActionResult<Service>> CreateService(Service item)
        {
            Service ItemCheck = _context.Services.FirstOrDefault(x => x.Id == item.Id);
            if (ItemCheck != null)
                return Content("Item exist");
            _context.Services.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetServices", new { id = item.Id }, item);
        }

        // DELETE: api/Services/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteService(int id)
        {
            var item = await _context.Services.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Services.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        // PUT: api/products/5
        [HttpPut("{id}")]
        public async Task<ActionResult<int>> UpdateService(int id, Service product)
        {
            var item = await _context.Services.FirstOrDefaultAsync(m => m.Id == id);

            if (item is null)
                return BadRequest();

            // Обновление свойств продукта
            item.DeliveryTime = product.DeliveryTime;
            item.elevatorPrice = product.elevatorPrice;
            item.handPrice = product.handPrice;
            item.assemblyPrice = product.assemblyPrice;

            await _context.SaveChangesAsync();

            return Ok(id);
        }

        //// GET: ItemsMores/Create
        //public IActionResult Create()
        //{
        //    return View();
        //}

        //// POST: ItemsMores/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create([Bind("Id,DeliveryTime,elevatorPrice,handPrice,assemblyPrice")] Service itemsMore)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        _context.Add(itemsMore);
        //        await _context.SaveChangesAsync();
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(itemsMore);
        //}

        //// GET: ItemsMores/Edit/5
        //public async Task<IActionResult> Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var itemsMore = await _context.Users.FindAsync(id);
        //    if (itemsMore == null)
        //    {
        //        return NotFound();
        //    }
        //    return View(itemsMore);
        //}

        //// POST: ItemsMores/Edit/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to.
        //// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("Id,DeliveryTime,elevatorPrice,handPrice,assemblyPrice")] Service itemsMore)
        //{
        //    if (id != itemsMore.Id)
        //    {
        //        return NotFound();
        //    }

        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _context.Update(itemsMore);
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!ItemsMoreExists(itemsMore.Id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }
        //        return RedirectToAction(nameof(Index));
        //    }
        //    return View(itemsMore);
        //}

        //// GET: ItemsMores/Delete/5
        //public async Task<IActionResult> Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return NotFound();
        //    }

        //    var itemsMore = await _context.Users
        //        .FirstOrDefaultAsync(m => m.Id == id);
        //    if (itemsMore == null)
        //    {
        //        return NotFound();
        //    }

        //    return View(itemsMore);
        //}

        //// POST: ItemsMores/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> DeleteConfirmed(int id)
        //{
        //    var itemsMore = await _context.Users.FindAsync(id);
        //    if (itemsMore != null)
        //    {
        //        _context.Users.Remove(itemsMore);
        //    }

        //    await _context.SaveChangesAsync();
        //    return RedirectToAction(nameof(Index));
        //}

        private bool ItemsMoreExists(int id)
        {
            return _context.Services.Any(e => e.Id == id);
        }
    }
}
