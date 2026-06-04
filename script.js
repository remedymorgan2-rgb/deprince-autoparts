// Select product from product card
function selectProduct(productName) {
  document.getElementById('productName').value = productName;
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Show or hide delivery fields
function toggleDelivery(isDelivery) {
  const fields = document.getElementById('delivery-fields');
  fields.style.display = isDelivery ? 'block' : 'none';
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('open');
}

// Submit order to WhatsApp
function submitOrder() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const product = document.getElementById('productName').value.trim();
  const car = document.getElementById('carModel').value.trim();
  const notes = document.getElementById('extraNotes').value.trim();
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const address = document.getElementById('deliveryAddress').value.trim();
  const date = document.getElementById('deliveryDate').value;

  // Validation
  if (!name || !phone || !product || !car) {
    alert('Please fill in your name, phone, product and car model before sending.');
    return;
  }

  if (deliveryType === 'delivery' && !address) {
    alert('Please enter your delivery address.');
    return;
  }

  // Build WhatsApp message
  let message = `🔧 *NEW ORDER — De Prince Auto Parts*\n\n`;
  message += `👤 *Customer:* ${name}\n`;
  message += `📞 *Phone:* ${phone}\n`;
  message += `🛒 *Product:* ${product}\n`;
  message += `🚗 *Car Model:* ${car}\n`;
  message += `📦 *Order Type:* ${deliveryType === 'delivery' ? 'Home Delivery' : 'Shop Pickup'}\n`;

  if (deliveryType === 'delivery') {
    message += `📍 *Delivery Address:* ${address}\n`;
    if (date) message += `📅 *Preferred Date:* ${date}\n`;
  }

  if (notes) message += `📝 *Extra Notes:* ${notes}\n`;
  message += `\n_Sent from De Prince Auto Website_`;

  const whatsappURL = `https://wa.me/2349036339950?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}