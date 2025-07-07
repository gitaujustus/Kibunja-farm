"use client";
import Image from "next/image";
import { useState } from "react";

const blogs = [
    {
      title: "5 Essential Tips for Raising Healthy Day-Old Chicks",
      date: "2024-06-01",
      author: "Kibunja Farm Team",
      image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop",
      excerpt: "Learn the key steps to ensure your day-old chicks grow into a healthy, productive flock. From brooder setup to feeding and vaccination, these tips will help you minimize losses and maximize growth.",
      content: [
        "Start with a clean, warm brooder. Disinfect all equipment including feeders, drinkers, and the brooder floor before the chicks arrive. Use wood shavings for bedding and set up everything 24 hours in advance to stabilize the environment.",
        "Maintain a consistent brooder temperature of 32–35°C during the first week. Gradually reduce it by 2–3°C each week as the chicks grow. Watch their behavior—huddling means it's too cold, spreading far apart means it's too hot.",
        "Provide clean, fresh water at all times using shallow drinkers to prevent drowning. For the first two days, add glucose or vitamin C to the water to reduce stress and boost energy. Clean the drinkers daily.",
        "Feed a high-quality starter mash with 18–20% protein, essential amino acids, and vitamins. Make sure all chicks have easy access to the feed to promote even growth. Avoid sudden changes in feed type or brand.",
        "Vaccinate the chicks according to schedule, starting with Newcastle on Day 7 and Gumboro on Day 14. Monitor the chicks daily for signs of illness like drooping wings, pasty vents, or weakness. Early detection prevents larger losses."
      ]
    },
    {
      title: "How to Maximize Egg Production in Kienyeji Hens",
      date: "2024-06-02",
      author: "Kibunja Farm Team",
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=743&auto=format&fit=crop",
      excerpt: "Unlock the full potential of your kienyeji hens with these proven strategies for boosting egg yield, improving shell quality, and maintaining flock health.",
      content: [
        "Feed a well-balanced layer mash with at least 16% protein and added calcium to support both egg formation and shell strength. Poor nutrition is the number one cause of low egg output. Avoid feeding scraps or grains only, as these don’t meet their nutritional needs.",
        
        "Ensure your hens have access to fresh, clean water at all times. Even a few hours without water can reduce egg production drastically. Use clean drinkers and change water daily, especially during hot weather when hens need more hydration.",
        
        "Provide at least 14 hours of natural or artificial light per day. Light triggers the reproductive system, so during short daylight seasons or in darker coops, consider adding a safe light bulb (not too hot) to extend daylight hours gradually.",
        
        "Maintain clean, dry, and well-ventilated housing to reduce stress. A calm hen lays more consistently. Remove wet litter, ensure good airflow, and protect hens from excessive noise or overcrowding. Stress from poor conditions or predators directly reduces egg laying.",
        
        "Collect eggs 2–3 times a day to prevent breakage and discourage hens from eating their eggs. Egg-eating behavior can spread quickly within a flock, so always collect eggs early and consistently.",
        
        "Control parasites like lice, mites, and worms through regular deworming and use of safe poultry dust. Parasites not only cause discomfort but also lower egg production by draining the hen's nutrients and energy.",
        
        "Provide private, dark nesting boxes filled with soft bedding. Hens prefer quiet and dark spaces to lay. One box for every 4–5 hens is ideal. Clean the boxes regularly to encourage frequent use.",
        
        "Keep a consistent routine for feeding, lighting, and coop maintenance. Hens thrive on routine. Sudden changes in their environment, feed, or handling can negatively impact their laying cycle.",
        
        "Culling unproductive hens after 18–24 months can also improve overall production. Older hens tend to lay fewer eggs, so replacing them with young pullets keeps your flock productive."
      ]
    },
    {
        title: "Is Buying and Selling Kienyeji Chicken Profitable?",
        date: "2024-06-05",
        author: "Justine Nyachieo",
        image: "https://cdn.standardmedia.co.ke/images/friday/xqlcv96chmtwxwjg6144dbb7a6991.jpg", 
        excerpt: "Buying and reselling kienyeji chicken is one of Kenya’s underrated hustles. Here’s how to turn a simple trade into a real business, even if you don’t rear birds.",
        content: [
          "Yes — buying and selling kienyeji chicken can be profitable in Kenya, but only if done smartly. Here’s the real talk.",
          
          "Why It Can Be Profitable:",
          "High Demand: Kienyeji chicken is popular for its taste, health benefits, and lower fat content. Hotels, households, and butcheries often prefer it over broilers.",
          "Higher Prices: Kienyeji chicken sells for Ksh.700 – Ksh.1,200 each (sometimes more during holidays). If you can buy at Ksh.400 – Ksh.600, there’s a solid profit margin.",
          "Low Maintenance: Kienyeji birds are hardy, eat leftovers, and require less feed than broilers.",
          
          "Buy and Resell Kienyeji Chicken – No Rearing Needed:",
          "This is the hustle-friendly, low-risk way to make money with kienyeji chicken — no need to rear, feed, or wait months.",
          
          "How It Works:",
          "Buy Low (Rural Areas): Source chickens from farmers in places like Kakamega, Kitui, Kisii, Embu, Murang'a, or Machakos. Negotiate for bulk (10–50 chickens at once) at around Ksh.450 – Ksh.600 each.",
          "Transport to Urban Markets: Sell in places like Nairobi estates (Pipeline, Githurai, South B, Umoja), open-air markets (Gikomba, Burma), door-to-door (WhatsApp, Facebook groups), and butcheries/hotels.",
          "Sell High: Live kienyeji fetch Ksh.800 – Ksh.1,200 each. Dressed (cleaned) can sell for Ksh.1,000 – Ksh.1,500.",
          "Focus on Weekends & Holidays: These are peak buying times – weddings, end-months, Christmas, and Easter make the best sales seasons.",
          
          "5 Real Moves to Win with Kienyeji Chicken Reselling in Kenya:",
          
          "1. Build a Network of Reliable Farmers: Visit local markets in rural areas. Build rapport with 2–3 serious farmers. Confirm weight, price, and health before each trip. Loyalty gets you better birds.",
          
          "2. Lock in Regular Buyers: Start with people you know — estate mums, butcheries, restaurants. Deliver a sample, and ask for weekly supply deals. Build a WhatsApp list of loyal customers.",
          
          "3. Promote Like a Hustler: Use WhatsApp status every week: 'Fresh kienyeji chicken this Friday. Cleaned & delivered. Ksh.950. DM to order.' Post in Facebook groups like Eastlando Hustlers and Online Farmers Market Kenya. Use photos, happy buyers, and clean packaging.",
          
          "4. Handle Cleaning — or Outsource: Many clients prefer cleaned birds. You can hire someone to help for Ksh.30–Ksh.50 per bird. Cleaned birds fetch Ksh.200–Ksh.400 more each.",
          
          "5. Offer Doorstep Delivery + M-Pesa: Urban clients love convenience. Accept M-Pesa for trust. Use bodabodas or deliver personally. Add a delivery fee or include it in the final price.",
          
          "Real Talk:",
          "Buy low (rural). Sell high (urban). Repeat. Buy at Ksh.450–600. Sell at Ksh.900–1,200. Profit: Ksh.300–600 per bird. Sell 10 in a day = Ksh.3,000–6,000.",
          "It’s low-risk and scalable. Start with 3–5 birds, no need for a farm. Build trust and consistency — repeat buyers are your goldmine. Focus on speed, honesty, and hygiene.",
          
          "You don’t need a title deed. You need a phone, hustle, and relationships.",
        ]
      }
      
  ];
  

export default function TipsPage() {
  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false));

  const handleToggle = idx => {
    setExpanded(expanded => expanded.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <section className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00743F] mb-3">Poultry Tips & Blog</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">Expert advice, practical tips, and the latest insights to help you succeed in poultry farming. Stay informed and grow your flock with confidence!</p>
      </section>
      <div className="space-y-10">
        {blogs.map((blog, i) => (
          <article key={i} className="block bg-white rounded-2xl shadow-md overflow-hidden">
            <Image width={1920} height={1080} src={blog.image} alt={blog.title} className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#104269] mb-2">{blog.title}</h2>
              <div className="text-sm text-gray-500 mb-2">By {blog.author} • {new Date(blog.date).toLocaleDateString()}</div>
              <p className="text-gray-700 mb-4">{blog.excerpt}</p>
              {expanded[i] && (
                <ul className="list-disc pl-5 text-gray-800 space-y-1 mb-4">
                  {blog.content.map((tip, j) => (
                    <li key={j}>{tip}</li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => handleToggle(i)}
                className=" text-blue-700 font-medium px-5 py-2 rounded-md transition-colors cursor-pointer hover:underline"
              >
                {expanded[i] ? "[See less]" : "[Read More]"}
              </button>
              {expanded[i] && (
                <div className="mt-4 text-right">
                  <a href={`https://wa.me/254101108340?text=Hello%20Kibunja%20Farm%2C%20I%20have%20a%20question%20about%20your%20blog%20post%3A%20${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FAB732] hover:bg-[#FAB732]/80 text-[#104269] font-semibold px-5 py-2 rounded-md transition-colors ml-2">Ask Us on WhatsApp</a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
