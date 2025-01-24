export const sendToTelegram = async (data: any) => {
  const BOT_TOKEN = "YOUR_BOT_TOKEN"; // Replace with your bot token
  const CHAT_ID = "YOUR_CHAT_ID"; // Replace with your chat ID
  
  const message = `
🛒 New Order:
Product: ${data.product}
Variant: ${data.variant}
Duration: ${data.duration} months
Quantity: ${data.quantity}
Total Price: ₹${data.totalPrice}
Delivery Date: ${data.deliveryDate}

Customer Details:
Name: ${data.name}
Phone: ${data.phone}
Address: ${data.address}
`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
};