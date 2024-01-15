var organizationData = [
  // order is organization1, description1, link1, organization2, description2, link2, organization3, description3, link3, why there is a crisis
  [
    "Life Water International", "Lifewater International is a Christian water development organization that serves vulnerable children and families in remote and rural areas of East Africa and Southeast Asia.", "https://lifewater.org/", "charity: water", "charity: water is a nonprofit organization bringing clean and safe drinking water to people in developing countries. They’ve funded 38,113 water projects for 9.6 million people in 24 countries around the world. In the last nine years, the organization dug more than 16,000 water projects, raised more than $200 million from donors, and set new standards for donor engagement and public communication.", "https://www.charitywater.org/", "Water.org", " Water.org helps people gain access to clean water and sanitation by teaching, training, and guiding local micro-finance institutions to make loans for providing access to clean water and sanitation. One of Water.org’s central tenets is the concept of community ownership of any water project(s).", "https://water.org/","Lybia's water resources were already unreliable, but the regime has cut off water for a large portion of the population, causing people to go through severe stretches without food and water."
  ],

  [
    "UN Volunteers", "Although UN Volunteers is a international charity organization, Western Sahara is one of their main focuses. Every year, they send volunteers to build water pumps to provide clean drinking water.", "https://www.unv.org/", "Water for Good", "Water for Good is an organization that is not only focused on building water pumps but also dedicated to maintaining them. On top of building almost 40 pumps, they have already made over 1,000 service visits in 2022 alone. Their service projects tend to last significantly longer than most other service projects in Western Sahara.", "https://waterforgood.org/", "The Water Project", "The Water Project travels to communities all over Africa to build water wells, small dams, spring protections and other water sources to give them access to safe, drinking water.", "https://thewaterproject.org/","Often described as the “Disputed Territory of Western Sahara,” the colony is home to thousands of Sahrawi refugees who suffer constant food and water shortages due to a decades-long struggle for control between Morocco and the Sahrawi tribal group known as the Polisario Front."
  ],

  [
    "SabaRelief", "Saba Relief is committed to provide the people of Yemen with access to clean water and sanitation. By regularly assessing the need for water in Yemen, we tailor specific solutions to problems that relate to the wellbeing of communities.", "https://sabarelief.org/water#:~:text=Saba%20Relief%20is%20committed%20to,to%20the%20wellbeing%20of%20communities.", "skt Wellfare", "skt Wellfare provides clean water to families by providing them with water tanks and trucks filled with water. These familes are able to use this water for drinking, cooking, cleaning and washing", "https://www.sktwelfare.org/water-aid-yemen/", "Yemen Water Fund", "The Yemen Water Fund is currently fundraising to rehabilitate the water network in Ma’rib, which is outdated and damaged by the conflict. With your donations, we aim to provide water to over 1.2 million people in Ma’rib, in sha Allah!", "https://muslimhands.org.uk/donate/yemen-emergency-appeal/yemen-water-fund","Yemen is a hotbed of conflict and a waypoint for terrorists traveling through the Middle East, and as such it is often in a weakened position to receive aid that includes fresh water. The country has little natural fresh water to use and relies heavily on water from other sources. Political strife in the region often prevents the people from receiving many necessities and water is chief among them."
  ],

  [
    "unicef water for every child", "Across the region’s conflict-affected countries, UNICEF’s teams are working around the clock to provide safe drinking water, sanitation services, trucking water, setting up latrines and promoting awareness of hygienic habits. UNICEF continues to work with partners to build sustainable water, sanitation, and hygiene systems that can withstand emergencies.", "https://www.unicef.org/mena/water-doesnt-come-tap", "Blood: Water", "Blood: Water is an equipping agency that partners with African grassroots organizations to address the water and HIV/AIDS crises. Their mission is to address the water crisis in Eastern Africa by focusing on individuals who were affected by HIV/AIDS. By increasing their awareness and education Blood: Water hopes to improve the longevity of people suffering from the autoimmune disorder and reduce the stress of access to drinkable water.", "https://www.bloodwater.org/", "Water Aid", "Their vision is a world where everyone, everywhere has safe water, sanitation, and hygiene. Their mission is to transform the lives of the poorest and most marginalized people by improving access to safe water, sanitation, and hygiene.", "https://www.wateraid.org/us/","Eastern Africa has long been the target of humanitarian aid from familiar acronyms like UNICEF and UNHCR, and Djibouti’s legacy as a refugee corridor and strategic military position has always made it a stress point for adequate water supply."
  ],

  [
    "Pure Hydration", "Pure Hydration has committed to delivering clean, safe drinking water to Ukraine through their handheld individual water purification bottles.","https://www.gofundme.com/f/wjv8nt-safe-water-for-ukraine%22,%22%22Ukraine%27s", "H2OforLifeSchools", "The bombing and shelling have broken pipelines, destroyed water treatment plants, and generally disrupted access to clean water for thousands upon thousands of Ukrainians. You can help by providing a donation to supply filters for the people of Ukraine", "https://www.h2oforlifeschools.org/campaign/clean-drinking-water-for-ukraine", "Water Missions", "The escalating conflict in Ukraine has left more than 6 million people struggling to access safe water. Water Mission is on the ground working to meet safe water, sanitation, and hygiene needs. We have sent emergency water treatment equipment and water purification supplies to get safe water flowing for men, women, and children. Water Mission is actively producing safe water in multiple cities in Ukraine.", "https://watermission.org/help-people-in-ukraine/", "Ukraine's people are trapped and are without medical supplies, food, and more importantly, drinking water. The war is taking away many things from these people and drinking water is no exception. They are dying right now."
  ]
];

function descriptionOne(){
  $(".first-box h2").html("Libya");
  $(".first-box p").html(organizationData[0][9]);
  $(".first-site h4").html(organizationData[0][0]);
  $(".first-site a").attr("href", organizationData[0][2]);
  $(".first-site p").html(organizationData[0][1]);
  $(".second-site h4").html(organizationData[0][3]);
  $(".second-site a").attr("href", organizationData[0][5]);
  $(".second-site p").html(organizationData[0][4]);
  $(".third-site h4").html(organizationData[0][6]);
  $(".third-site a").attr("href", organizationData[0][8]);
  $(".third-site p").html(organizationData[0][7]);
}

function descriptionTwo(){
  $(".first-box h2").html("Western Sahara");
  $(".first-box p").html(organizationData[1][9]);
  $(".first-site h4").html(organizationData[1][0]);
  $(".first-site a").attr("href", organizationData[1][2]);
  $(".first-site p").html(organizationData[1][1]);
  $(".second-site h4").html(organizationData[1][3]);
  $(".second-site a").attr("href", organizationData[1][5]);
  $(".second-site p").html(organizationData[1][4]);
  $(".third-site h4").html(organizationData[1][6]);
  $(".third-site a").attr("href", organizationData[1][8]);
  $(".third-site p").html(organizationData[1][7]);
}

function descriptionThree(){
  $(".first-box h2").html("Yemen");
  $(".first-box p").html(organizationData[2][9]);
  $(".first-site h4").html(organizationData[2][0]);
  $(".first-site a").attr("href", organizationData[2][2]);
  $(".first-site p").html(organizationData[2][1]);
  $(".second-site h4").html(organizationData[2][3]);
  $(".second-site a").attr("href", organizationData[2][5]);
  $(".second-site p").html(organizationData[2][4]);
  $(".third-site h4").html(organizationData[2][6]);
  $(".third-site a").attr("href", organizationData[2][8]);
  $(".third-site p").html(organizationData[2][7]);
}

function descriptionFour(){
  $(".first-box h2").html("Djibouti");
  $(".first-box p").html(organizationData[3][9]);
  $(".first-site h4").html(organizationData[3][0]);
  $(".first-site a").attr("href", organizationData[3][2]);
  $(".first-site p").html(organizationData[3][1]);
  $(".second-site h4").html(organizationData[3][3]);
  $(".second-site a").attr("href", organizationData[3][5]);
  $(".second-site p").html(organizationData[3][4]);
  $(".third-site h4").html(organizationData[3][6]);
  $(".third-site a").attr("href", organizationData[3][8]);
  $(".third-site p").html(organizationData[3][7]);
}

function descriptionFive(){
  $(".first-box h2").html("Ukraine");
  $(".first-box p").html(organizationData[4][9]);
  $(".first-site h4").html(organizationData[4][0]);
  $(".first-site a").attr("href", organizationData[4][2]);
  $(".first-site p").html(organizationData[4][1]);
  $(".second-site h4").html(organizationData[4][3]);
  $(".second-site a").attr("href", organizationData[4][5]);
  $(".second-site p").html(organizationData[4][4]);
  $(".third-site h4").html(organizationData[4][6]);
  $(".third-site a").attr("href", organizationData[4][8]);
  $(".third-site p").html(organizationData[4][7]);
}
