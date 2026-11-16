/**
 * The 12 service pages for New Berlin Elite Drywall.
 * Each renders at /services/<slug>/ with its own metadata and copy.
 * Photos are licensed stock (Envato Elements) used for illustration only.
 */
export interface Service {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  quick: string;
  photo: string;
  photoAlt: string;
  intro: string[];
  what: { h: string; p: string[] };
  situations: { h: string; items: { t: string; d: string }[] };
  process: { h: string; steps: { t: string; d: string }[] };
  materials: { h: string; p: string[] };
  benefits: { h: string; items: { t: string; d: string }[] };
  local: { h: string; p: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
  ba: { before: string; after: string; beforeAlt: string; afterAlt: string };
}

export const services: Service[] = [
  {
    slug: 'commercial-drywall-services',
    name: 'Commercial Drywall Services',
    short: 'Walls and ceilings for offices, shops and workspaces, built around your business hours.',
    title: 'Commercial Drywall Services in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Commercial drywall in New Berlin for offices, retail and industrial space. New partitions, repairs and finishing scheduled so your business keeps running.',
    h1: 'Commercial drywall in New Berlin',
    lede: 'New offices, moved walls and repairs for local businesses, planned so your doors stay open.',
    quick: 'We build, move and repair interior walls and ceilings for businesses. Most small projects, like adding an office or two, take one to two weeks and can be done after hours.',
    photo: 'commercial-interior-renovation-windows',
    photoAlt: 'Bright commercial interior mid-renovation with white walls and large black-framed windows',
    intro: [
      'If you run a business, you didn’t plan on becoming an expert in partition walls. You just need another office, or a bigger break room, or the damage by the loading door fixed before it gets worse. And you’d like it done without shutting down for a week.',
      'That’s the kind of commercial work we do. We’re a good fit for owners, office managers and property managers who want one clear price, one point of contact, and a crew that cleans up before your staff comes in.',
    ],
    what: {
      h: 'What we can do for your space',
      p: [
        'We frame new walls with steel studs, hang the drywall, tape and finish it, and leave it ready for your painter. We also take out walls you no longer want and patch the floor-to-ceiling scars they leave behind.',
        'If your project has architect’s drawings, we build to them. If it doesn’t, we’ll walk the space with you, sketch out what you’re after, and flag anything that may need a permit or a fire rating so there are no surprises later.',
      ],
    },
    situations: {
      h: 'You might need us if…',
      items: [
        { t: 'You’re out of offices', d: 'We can divide open space into private rooms, often over a couple of weekends.' },
        { t: 'You’re moving into a new suite', d: 'The layout the last tenant left rarely fits. We rework it to suit you.' },
        { t: 'Sound is a problem', d: 'Insulated walls and sealed joints make a conference room actually private.' },
        { t: 'Something got damaged', d: 'Leaks, carts, forklifts and move-outs all leave marks we can erase.' },
        { t: 'You’re opening a shop', d: 'Sales floor, stock room and back office walls on your opening schedule.' },
      ],
    },
    process: {
      h: 'How it works',
      steps: [
        { t: 'We visit and listen', d: 'You show us the space and tell us what isn’t working.' },
        { t: 'You get a clear quote', d: 'One number, with what’s included spelled out in plain English.' },
        { t: 'We agree on hours', d: 'Daytime, evenings or weekends. Whatever keeps you operating.' },
        { t: 'We build and finish', d: 'Framing, board, tape and sanding, with the area sealed off from the rest.' },
        { t: 'We clean up and walk it', d: 'You check the work with us before we call it done.' },
      ],
    },
    materials: {
      h: 'A few things worth knowing',
      p: [
        'Commercial walls usually use steel studs and thicker, fire-rated drywall. Some walls, such as those along a shared corridor or between two tenants, have to meet a fire rating and run all the way up to the roof deck. We’ll tell you which of yours do.',
        'For walls that take a beating, there’s tougher impact-resistant board. For restrooms and kitchens, moisture-resistant board. We’ll recommend what makes sense and explain why, not just add it to the bill.',
      ],
    },
    benefits: {
      h: 'Why businesses like working with us',
      items: [
        { t: 'You stay open', d: 'We schedule around you, not the other way round.' },
        { t: 'No jargon', d: 'We explain what we’re doing in normal words.' },
        { t: 'Tidy every day', d: 'Your team shouldn’t arrive to dust on their desks.' },
        { t: 'One contact', d: 'You always know who to call.' },
      ],
    },
    local: {
      h: 'Commercial space in New Berlin',
      p: [
        'New Berlin has one of the larger industrial parks in the area, along with office buildings and retail centers on Moorland Road and National Avenue. Much of that space is flexible by design: a warehouse with offices at the front, a suite that’s been three different businesses.',
        'That flexibility means walls get moved a lot. We’re used to working in buildings like these, including the tall walls and exposed ceilings that come with industrial space.',
      ],
    },
    faqs: [
      { q: 'Do we need to close while you work?', a: 'Almost never. We seal off the work area and can do noisy or dusty steps outside your business hours.' },
      { q: 'We don’t have drawings. Is that a problem?', a: 'No. For simple changes we can work from a site visit and a sketch. For bigger projects we’ll let you know if a designer or permit drawings are needed.' },
      { q: 'Do I need a permit to add a wall?', a: 'Often, yes, for commercial space. It depends on the change. We’ll tell you what the city is likely to want before you commit.' },
      { q: 'Can you match our existing walls?', a: 'Yes. We match texture and finish so new walls don’t look like an add-on.' },
      { q: 'Do you work with our landlord or contractor?', a: 'Happily. We can take direction from your landlord’s rules or work as a subcontractor on a larger job.' },
    ],
    related: ['drywall-installation', 'drywall-repair', 'drywall-finishing', 'drywall-taping-mudding'],
    ba: { before: 'commercial-interior-renovation-windows', after: 'bright-hall-spiral-staircase', beforeAlt: 'Commercial interior during renovation', afterAlt: 'Bright finished interior with smooth white walls' },
  },
  {
    slug: 'residential-drywall-services',
    name: 'Residential Drywall Services',
    short: 'Remodels, additions and repairs for New Berlin homeowners.',
    title: 'Residential Drywall Services in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Friendly, tidy residential drywall in New Berlin. Remodels, additions, basements and repairs with clear pricing and a room left ready for paint.',
    h1: 'Residential drywall in New Berlin',
    lede: 'New walls for your remodel, or old ones made right again. Explained clearly and done cleanly.',
    quick: 'We hang, finish and repair drywall in homes. A typical room takes about a week from first sheet to ready-for-paint, and you can stay in the house the whole time.',
    photo: 'open-plan-room-drywall-complete',
    photoAlt: 'Open-plan home interior with new drywall finished and ready for flooring and paint',
    intro: [
      'Most people only deal with drywall a few times in their lives. So it’s normal not to know what a fair price looks like, how long it should take, or what “Level 4” means. You shouldn’t have to.',
      'We’ll explain your options in plain language, give you a price in writing, and then do the work the way we said we would. That covers a new kitchen wall, a finished basement, or just the crack in the hallway that’s been annoying you for years.',
    ],
    what: {
      h: 'What we do in homes',
      p: [
        'New drywall for remodels and additions. Finishing for board that’s already up. Repairs of every size. Popcorn ceiling removal. Basements and garages. If it’s a wall or a ceiling and it’s made of drywall, it’s probably something we do.',
        'We also handle the in-between jobs other trades leave behind, like the six holes your electrician cut to run new wiring. Those are quick for us and they make a big difference to how finished your house feels.',
      ],
    },
    situations: {
      h: 'Times homeowners call us',
      items: [
        { t: 'During a remodel', d: 'Your contractor, or you, need the walls closed up so the project can move on.' },
        { t: 'Before painting', d: 'Fix the cracks and dents first and the new paint looks twice as good.' },
        { t: 'After a leak', d: 'Stained or soft drywall replaced once the plumbing or roof is sorted.' },
        { t: 'When buying or selling', d: 'A tidy-up of everything on the inspection report.' },
        { t: 'When the house feels dated', d: 'Popcorn ceilings and heavy textures swapped for smooth.' },
      ],
    },
    process: {
      h: 'What to expect',
      steps: [
        { t: 'A friendly visit', d: 'We look, measure and answer your questions. No pressure.' },
        { t: 'A written estimate', d: 'What we’ll do, how long it takes and what it costs.' },
        { t: 'Prep day', d: 'Floors covered, furniture protected, the room sealed off.' },
        { t: 'The work', d: 'Hanging, then three coats of compound over several days.' },
        { t: 'Clean-up and a walkthrough', d: 'We vacuum, then check every wall with you.' },
      ],
    },
    materials: {
      h: 'Choices you’ll be asked about',
      p: [
        'Finish level is the main one. Level 4 is the standard smooth finish and suits most rooms. Level 5 adds a thin coat over the entire wall, and it’s worth it in bright rooms or if you like paint with a bit of shine.',
        'The other is texture. Smooth walls look clean and modern. A light texture hides small bumps and is easier to live with if you have kids and pets. We’ll show you samples so you’re not guessing.',
      ],
    },
    benefits: {
      h: 'What you’ll notice',
      items: [
        { t: 'You understand the plan', d: 'No mystery line items.' },
        { t: 'Your house stays livable', d: 'Dust is contained and cleaned up daily.' },
        { t: 'It’s done when promised', d: 'We build drying time into the schedule up front.' },
        { t: 'The paint looks great', d: 'Because the surface under it is right.' },
      ],
    },
    local: {
      h: 'Homes in New Berlin',
      p: [
        'A lot of New Berlin was built between the 1960s and the 1990s: ranches, split-levels, bi-levels and two-story colonials on good-sized lots. Those houses are now at the age where kitchens and baths are being redone, basements finished and popcorn ceilings finally retired.',
        'We see the same handful of things over and over in these homes, which is a good thing. It means we usually know what we’ll find before we open the wall.',
      ],
    },
    faqs: [
      { q: 'Can I stay home while you work?', a: 'Yes. We close off the room we’re in. Lots of our customers work from home right through the job.' },
      { q: 'How much will it cost?', a: 'It depends on size, access and finish. We’d rather look and give you a real number than guess. The estimate is free.' },
      { q: 'Do you paint too?', a: 'We stop at sanded and ready for primer. If you need a painter, ask and we’ll tell you what we can help arrange.' },
      { q: 'I have pets. Is that an issue?', a: 'Not at all. We keep doors and plastic barriers closed and let you know when we’re coming and going.' },
      { q: 'Is my job too small?', a: 'No such thing. One patch is fine.' },
    ],
    related: ['drywall-repair', 'drywall-installation', 'basement-drywall-installation', 'popcorn-ceiling-removal'],
    ba: { before: 'new-house-interior-drywall-taped', after: 'living-room-media-wall', beforeAlt: 'House interior with drywall taped but unfinished', afterAlt: 'Finished living room with smooth walls and built-in media wall' },
  },
  {
    slug: 'popcorn-ceiling-removal',
    name: 'Popcorn Ceiling Removal',
    short: 'Say goodbye to the bumpy ceiling. We scrape, smooth and get it ready for paint.',
    title: 'Popcorn Ceiling Removal in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Popcorn ceiling removal in New Berlin. We test, scrape, repair and skim your ceilings smooth, with your room protected from start to finish.',
    h1: 'Popcorn ceiling removal in New Berlin',
    lede: 'The quickest way to make a 1970s room feel new again.',
    quick: 'We remove the texture, fix the joints underneath and skim the ceiling smooth. Plan on three to four days for a bedroom. Homes built before the late 1980s should have the texture tested for asbestos first.',
    photo: 'popcorn-ceiling-scraping',
    photoAlt: 'Gloved hand scraping popcorn texture off a ceiling with a long-handled blade',
    intro: [
      'If your ceilings look like cottage cheese, you’re in good company. Popcorn texture was sprayed on almost every ceiling for about thirty years. It was fast and cheap, and it hid a lot of shortcuts.',
      'These days it mostly collects dust and makes rooms feel darker. The good news is that it can come down, and the ceiling underneath can be made smooth. It’s a messy job, though, which is why most people would rather hand it to us.',
    ],
    what: {
      h: 'What’s involved',
      p: [
        'First we protect everything, because this is the messiest thing we do. Floors, walls, vents and anything that can’t leave the room are wrapped in plastic. Then the texture is dampened and scraped off.',
        'What’s left is a ceiling that was never properly finished. So we finish it: fix any loose tape, coat the joints and screw heads, and skim the whole surface until it’s flat. That second half is what makes the result look good.',
      ],
    },
    situations: {
      h: 'Good times to do it',
      items: [
        { t: 'Before you move in', d: 'An empty house is the easiest and cheapest time.' },
        { t: 'When you’re painting', d: 'Do ceilings before walls and floors.' },
        { t: 'After a ceiling repair', d: 'Popcorn can’t be patched invisibly, so many people remove it room-wide.' },
        { t: 'When it starts to flake', d: 'Old texture loses its grip, especially in kitchens and baths.' },
      ],
    },
    process: {
      h: 'Step by step',
      steps: [
        { t: 'Test first', d: 'We’ll explain how to get a small sample lab-tested for asbestos.' },
        { t: 'Wrap the room', d: 'Plastic everywhere, light fixtures covered or taken down.' },
        { t: 'Scrape', d: 'Texture is wet down and removed.' },
        { t: 'Repair and skim', d: 'Joints fixed, then two or three thin coats across the ceiling.' },
        { t: 'Sand and clean', d: 'Dust-controlled sanding, then all the plastic goes out with the mess inside.' },
      ],
    },
    materials: {
      h: 'About asbestos, honestly',
      p: [
        'Some popcorn ceilings installed before the late 1980s contain asbestos. You can’t tell by looking. A lab test is inexpensive and quick, and it’s the only way to know.',
        'If yours tests positive, don’t panic, and don’t scrape it. Left alone it isn’t a hazard. Your options are professional abatement, or covering the ceiling with a new thin layer of drywall, which we can do. Either way you still end up with a smooth ceiling.',
      ],
    },
    benefits: {
      h: 'Why people love the result',
      items: [
        { t: 'Rooms feel bigger', d: 'Smooth ceilings reflect more light.' },
        { t: 'No more dust traps', d: 'A flat surface wipes clean.' },
        { t: 'Easy to repaint', d: 'One roller, no special tools.' },
        { t: 'Instant update', d: 'It’s one of the most noticeable changes you can make.' },
      ],
    },
    local: {
      h: 'Popcorn ceilings around New Berlin',
      p: [
        'Because so much of New Berlin went up between the 60s and 80s, popcorn ceilings are everywhere here: bedrooms, hallways, living rooms and plenty of finished basements.',
        'Those dates are also why we always bring up testing. It’s a small step that keeps everyone safe.',
      ],
    },
    faqs: [
      { q: 'How messy is it really?', a: 'Very, if it isn’t contained. That’s why we spend the first part of the job wrapping the room. When we’re done, the mess leaves with the plastic.' },
      { q: 'Do I need to move my furniture?', a: 'Empty rooms are best. If something can’t be moved, we’ll shift it to the middle and wrap it.' },
      { q: 'My popcorn has been painted. Can it still come off?', a: 'Usually, but it’s slower. Sometimes covering it with new drywall is the smarter choice. We’ll tell you which when we see it.' },
      { q: 'Will my ceiling be perfectly flat?', a: 'It’ll be smooth and paint-ready. We check it with a bright light so you’re not surprised later.' },
      { q: 'Can you do just one room?', a: 'Sure. Lots of people start with the main living area.' },
    ],
    related: ['ceiling-drywall-repair', 'drywall-finishing', 'residential-drywall-services', 'drywall-repair'],
    ba: { before: 'popcorn-ceiling-scraping', after: 'bright-empty-room-new-drywall-windows', beforeAlt: 'Popcorn texture being scraped from a ceiling', afterAlt: 'Bright room with a smooth white ceiling' },
  },
  {
    slug: 'drywall-patching',
    name: 'Drywall Patching',
    short: 'Holes big and small, patched so you can’t tell where they were.',
    title: 'Drywall Patching in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Drywall patching in New Berlin for doorknob holes, plumbing cut-outs, anchor damage and dents. Quick, tidy and blended to match your wall.',
    h1: 'Drywall patching in New Berlin',
    lede: 'That hole you keep hanging a picture over? We can make it disappear.',
    quick: 'Most patches take one or two short visits. We cut out the damage, fit a new piece, tape and smooth it, and match your wall texture. Then it just needs primer and paint.',
    photo: 'wide-knife-smoothing-joint-compound',
    photoAlt: 'Wide drywall knife smoothing joint compound across a repaired wall section',
    intro: [
      'Holes happen. A doorknob goes through the wall. A plumber has to cut in to reach a pipe. A shelf comes down and takes a chunk of drywall with it. It’s not a disaster, but it does bug you every time you walk by.',
      'A good patch isn’t complicated, but it does take the right steps and a bit of patience. Skip one and you get that tell-tale bump under the paint. We don’t skip them.',
    ],
    what: {
      h: 'How a hole gets fixed properly',
      p: [
        'We cut the ragged hole into a clean square, add support behind the wall, and screw in a new piece of drywall the same thickness as the old. Then the edges are taped, just like the seams in the rest of your house.',
        'After that come three thin coats of joint compound, each spread a little wider than the last. That wide, gradual feathering is the secret. It’s why you won’t see an outline once the wall is painted.',
      ],
    },
    situations: {
      h: 'Holes we see all the time',
      items: [
        { t: 'Doorknob holes', d: 'We fix the wall and suggest a door stop so it doesn’t happen again.' },
        { t: 'Plumbing and electrical access', d: 'Neat squares left behind after repairs.' },
        { t: 'Wall anchor blowouts', d: 'From TVs, shelves, curtain rods and mirrors.' },
        { t: 'Kid and pet damage', d: 'Toys, hockey sticks, enthusiastic dogs. No judgment.' },
        { t: 'Old cable and phone jacks', d: 'Little openings nobody needs any more.' },
      ],
    },
    process: {
      h: 'What we’ll do',
      steps: [
        { t: 'Look and quote', d: 'Often from a photo you text or upload.' },
        { t: 'Cut and back', d: 'Clean edges, solid support behind.' },
        { t: 'Patch and tape', d: 'New drywall in, seams taped.' },
        { t: 'Coat and feather', d: 'Three coats, spread wide.' },
        { t: 'Sand and match', d: 'Smooth to the touch, textured like the rest.' },
      ],
    },
    materials: {
      h: 'Why store-bought patch kits disappoint',
      p: [
        'Peel-and-stick mesh patches are fine for a tiny hole in a closet. On a visible wall they leave a raised square, and they tend to crack around the edge because there’s nothing solid behind them.',
        'We use real drywall, paper tape and a fast-setting compound that hardens instead of just drying. It’s a stronger repair and it sands perfectly flat.',
      ],
    },
    benefits: {
      h: 'What you get',
      items: [
        { t: 'A wall that looks untouched', d: 'No bump, no outline.' },
        { t: 'A quick turnaround', d: 'Small patches don’t wait behind big jobs for long.' },
        { t: 'A fair price for several', d: 'Have a few? We’ll do them all in one go.' },
        { t: 'Honest advice', d: 'If it’s something you could do yourself, we’ll say so.' },
      ],
    },
    local: {
      h: 'Patching in New Berlin homes',
      p: [
        'Many homes here are at the age where plumbing and electrical updates are common, and every one of those jobs leaves a few holes. We’re often the last call on the list after the plumber and electrician have finished.',
        'Wall textures vary from house to house around here, from smooth to a light orange peel. Matching yours is part of the job.',
      ],
    },
    faqs: [
      { q: 'Can I send a photo for a quote?', a: 'Yes, please do. For most patches a photo with something for scale is all we need.' },
      { q: 'Will you paint the patch?', a: 'We leave it ready for primer and paint. Painting the whole wall, corner to corner, gives the best blend.' },
      { q: 'How long until I can paint?', a: 'Usually the next day, once the last coat is dry and sanded.' },
      { q: 'Is there a minimum charge?', a: 'There’s a practical minimum for coming out, which is why it’s smart to group a few repairs. We’ll tell you up front.' },
      { q: 'Can you fix a patch someone else did badly?', a: 'Yes. We often redo patches that stick out or have cracked.' },
    ],
    related: ['drywall-repair', 'ceiling-drywall-repair', 'water-damaged-drywall-repair', 'residential-drywall-services'],
    ba: { before: 'wide-knife-smoothing-joint-compound', after: 'living-room-media-wall', beforeAlt: 'Wall repair being coated with joint compound', afterAlt: 'Finished living room with flawless walls' },
  },
  {
    slug: 'water-damaged-drywall-repair',
    name: 'Water-Damaged Drywall Repair',
    short: 'Stains, soft spots and sagging from leaks, cut out and made new.',
    title: 'Water-Damaged Drywall Repair in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Water-damaged drywall repair in New Berlin. We remove wet or stained drywall, make sure it is dry behind, and rebuild your wall or ceiling to match.',
    h1: 'Water-damaged drywall repair in New Berlin',
    lede: 'Leaks are stressful enough. We’ll take care of the wall or ceiling part.',
    quick: 'Once the leak is fixed, we remove the damaged drywall, let everything dry, then install and finish new board. Small ceiling repairs often take three or four days including drying.',
    photo: 'water-spotted-wall-surface',
    photoAlt: 'White wall surface covered in yellow-brown water spots and stains',
    intro: [
      'Finding a water stain is never a great moment. Is the leak still going? Is there mold? Is the ceiling about to come down? Take a breath. Most water damage looks worse than it is, and it’s very fixable.',
      'The first job is stopping the water, which means a plumber or roofer. The second is ours: getting rid of the drywall that got wet and putting your wall or ceiling back the way it was.',
    ],
    what: {
      h: 'Does it really need replacing?',
      p: [
        'Not always. Press on the stain. If the drywall is firm and flat, and it dried out quickly, it can usually be sealed with a special primer and repainted. That’s a much smaller job and we’ll tell you if it’s all you need.',
        'If it’s soft, crumbly, bulging or smells musty, it has to come out. Wet drywall doesn’t recover, and leaving it invites mold. We also check further than the stain, because water travels before it shows.',
      ],
    },
    situations: {
      h: 'Where the water usually comes from',
      items: [
        { t: 'The bathroom upstairs', d: 'A leaky toilet seal, tub drain or supply line shows up on the ceiling below.' },
        { t: 'The roof', d: 'Missing shingles, bad flashing or winter ice dams.' },
        { t: 'Appliances', d: 'Dishwashers, washing machines, fridges with ice makers and water heaters.' },
        { t: 'The basement', d: 'Seepage or a sump pump that quit during a storm.' },
        { t: 'Frozen pipes', d: 'A cold snap, a pipe in an outside wall, and a very bad morning.' },
      ],
    },
    process: {
      h: 'How we fix it',
      steps: [
        { t: 'Make sure the leak is fixed', d: 'Otherwise you’ll be calling us twice.' },
        { t: 'Check how far it went', d: 'A moisture meter tells us what the eye can’t.' },
        { t: 'Remove the wet stuff', d: 'Drywall and any soaked insulation.' },
        { t: 'Let it dry', d: 'A few days with air moving, until the wood reads dry.' },
        { t: 'Rebuild and blend', d: 'New board, taped, finished and textured to match.' },
      ],
    },
    materials: {
      h: 'Two things that prevent a repeat',
      p: [
        'First, a stain-blocking primer. Water stains bleed through normal paint, sometimes weeks later. The right primer locks them in for good.',
        'Second, the right board. In bathrooms and basements we replace regular drywall with a moisture- and mold-resistant type. It costs a little more and handles humidity far better.',
      ],
    },
    benefits: {
      h: 'What we take off your plate',
      items: [
        { t: 'The worry about mold', d: 'We open it up and look, so you know.' },
        { t: 'The ugly stain', d: 'Gone, and sealed so it stays gone.' },
        { t: 'The insurance paperwork', d: 'We’ll write an itemized estimate you can submit.' },
        { t: 'The guesswork', d: 'You’ll know exactly what was damaged and what we did.' },
      ],
    },
    local: {
      h: 'Water damage in our area',
      p: [
        'Wisconsin winters cause a good share of it. Ice dams form along roof edges and push meltwater indoors, and pipes in outside walls and over garages can freeze during a hard cold snap.',
        'Spring brings the other half. New Berlin sees heavy rain on ground that’s still thawing, and finished basements are the first to feel it. If your sump pump has ever let you down, you know.',
      ],
    },
    faqs: [
      { q: 'Is the stain dangerous?', a: 'The stain itself, no. What matters is whether the drywall is still damp or soft. If you’re unsure, we’ll check it with a meter.' },
      { q: 'How do I know if there’s mold?', a: 'A musty smell or visible spotting are the clues. We’ll see for certain when we open the area. A little surface mold we can clean. A lot needs a specialist, and we’ll tell you.' },
      { q: 'Will insurance cover it?', a: 'It depends on your policy and what caused the leak. We can give you a detailed estimate and photos to send your insurer.' },
      { q: 'Can you fix the leak?', a: 'No, that’s a job for a plumber or roofer. We come in right after.' },
      { q: 'Will the new section match?', a: 'Yes. We blend the joints and match the texture, then the whole ceiling or wall gets repainted.' },
    ],
    related: ['ceiling-drywall-repair', 'drywall-repair', 'basement-drywall-installation', 'drywall-patching'],
    ba: { before: 'water-spotted-wall-surface', after: 'bright-empty-room-new-drywall-windows', beforeAlt: 'Wall with widespread water spotting', afterAlt: 'Clean, bright room with new smooth walls' },
  },
  {
    slug: 'garage-drywall-installation',
    name: 'Garage Drywall Installation',
    short: 'Turn bare studs into a bright, clean, usable garage.',
    title: 'Garage Drywall Installation in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Garage drywall installation in New Berlin. Insulation, fire-rated drywall and a finish to suit how you use the space, from simple storage to a workshop.',
    h1: 'Garage drywall installation in New Berlin',
    lede: 'A finished garage is warmer, brighter and a lot nicer to walk into every day.',
    quick: 'We insulate if you’d like, hang fire-rated drywall and finish it to the level you choose. A two-car garage usually takes about a week.',
    photo: 'garage-interior-finished-walls',
    photoAlt: 'Clean, empty garage with finished white walls and ceiling',
    intro: [
      'Garages tend to be the last room anyone finishes. The builder leaves the studs showing, life gets busy, and fifteen years later you’re still looking at pink insulation every time you take out the trash.',
      'Finishing it is one of those projects people wish they’d done sooner. The space gets brighter and cleaner, it holds heat better, and suddenly there are proper walls to hang things on.',
    ],
    what: {
      h: 'What a garage needs',
      p: [
        'Garages have a safety rule houses don’t. The wall between your garage and your home, and the ceiling if there’s a room above, generally needs thicker fire-rated drywall. We’ll check what applies to your house and build to it.',
        'Beyond that, it’s about how you’ll use the space. Just parking? A basic taped finish is plenty. Workshop, gym or hangout? Go for a smooth, painted finish and it’ll feel like part of the house.',
      ],
    },
    situations: {
      h: 'Reasons people finish the garage',
      items: [
        { t: 'It’s freezing in winter', d: 'Insulation plus drywall makes a real difference, with or without a heater.' },
        { t: 'It looks unfinished', d: 'Because it is. Painted walls fix that.' },
        { t: 'They want storage', d: 'Cabinets, slat wall and racks all need solid walls.' },
        { t: 'They’re setting up a workshop or gym', d: 'A cleaner, brighter room you’ll actually use.' },
        { t: 'The old drywall is damaged', d: 'Holes, sagging ceilings and water-stained bottoms replaced.' },
      ],
    },
    process: {
      h: 'How the job goes',
      steps: [
        { t: 'We take a look', d: 'And talk about how you want to use the garage.' },
        { t: 'Insulation goes in', d: 'If you want it. Now is the time.' },
        { t: 'Drywall goes up', d: 'Ceiling first, then walls, kept just off the floor.' },
        { t: 'We tape and finish', d: 'As simple or as smooth as you’ve chosen.' },
        { t: 'We clean up', d: 'So you can paint or park right away.' },
      ],
    },
    materials: {
      h: 'Good to know',
      p: [
        'We use 5/8-inch drywall in garages. It’s tougher than the 1/2-inch used indoors, it’s what the fire rule calls for, and it won’t sag on the ceiling.',
        'We also leave a small gap between the drywall and the concrete floor. Garage floors get wet from snowy cars, and drywall that touches the floor soaks it up like a sponge.',
      ],
    },
    benefits: {
      h: 'What changes',
      items: [
        { t: 'Warmer in winter', d: 'Less cold seeping into the house, too.' },
        { t: 'Brighter', d: 'White walls bounce light around.' },
        { t: 'Cleaner', d: 'No more dusty insulation and cobwebby studs.' },
        { t: 'More useful', d: 'Walls you can mount things on.' },
      ],
    },
    local: {
      h: 'New Berlin garages',
      p: [
        'With the larger lots here, lots of homes have two-and-a-half or three-car garages, and many have a detached second garage or shed as well. That’s a lot of space to leave unfinished.',
        'And since we get a solid four or five months of winter, an insulated garage earns its keep. Your car, your tools and the room above it will all thank you.',
      ],
    },
    faqs: [
      { q: 'Do I have to empty the garage?', a: 'As much as you can. We can work around things moved to the center and covered, but empty is faster and cheaper.' },
      { q: 'Should I insulate?', a: 'If you’ll ever heat the garage, or if there’s a bedroom above it, yes. It’s far cheaper before the drywall goes up.' },
      { q: 'Can you do it in winter?', a: 'Yes. We bring temporary heat for the finishing stage so the compound dries properly.' },
      { q: 'Do I need to paint it afterward?', a: 'You don’t have to, but primer and paint protect the drywall and make the space much brighter.' },
      { q: 'What about the attic hatch and outlets?', a: 'We cut neatly around them. If you’re adding outlets or lights, have your electrician finish the rough wiring first.' },
    ],
    related: ['drywall-installation', 'drywall-taping-mudding', 'residential-drywall-services', 'drywall-repair'],
    ba: { before: 'new-house-interior-drywall-taped', after: 'garage-interior-finished-walls', beforeAlt: 'Interior with drywall hung and taped', afterAlt: 'Finished garage with clean white walls' },
  },
  {
    slug: 'basement-drywall-installation',
    name: 'Basement Drywall Installation',
    short: 'The step that turns a framed basement into real rooms.',
    title: 'Basement Drywall Installation in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Basement drywall installation in New Berlin. Moisture-smart board, neat soffits around ducts and a smooth finish for family rooms, offices and bedrooms.',
    h1: 'Basement drywall installation in New Berlin',
    lede: 'Family room, home office, guest bedroom. Whatever you’re planning down there, it starts with good walls.',
    quick: 'Once your basement is framed, wired and inspected, we hang and finish the drywall. An average basement takes about two weeks, most of it drying time between coats.',
    photo: 'finished-rec-room-pool-table',
    photoAlt: 'Finished basement rec room with pool table, pendant lights and smooth walls',
    intro: [
      'Finishing the basement is the most popular way to add living space without adding on. You already own the square footage. It just needs walls, a ceiling and some comfort.',
      'Drywall is where it stops looking like a construction site and starts looking like a room. It’s also the stage where a few smart choices decide whether your basement still looks good in ten years.',
    ],
    what: {
      h: 'What makes basements different',
      p: [
        'Two things. First, moisture. Basements are naturally more humid, and the floor can get damp. So we use moisture-resistant drywall where it counts and keep the bottom edge off the concrete.',
        'Second, everything hanging from the ceiling: ducts, pipes and beams. Each has to be boxed in, and those boxes, called soffits, are the difference between a basement that looks planned and one that looks patched together.',
      ],
    },
    situations: {
      h: 'Basement projects we do',
      items: [
        { t: 'The full finish', d: 'Rec room, bedroom, bathroom and hallway, all at once.' },
        { t: 'One room for now', d: 'A home office or playroom, with the rest left for later.' },
        { t: 'An update', d: 'Old paneling and stained ceiling tiles replaced with smooth drywall.' },
        { t: 'A repair', d: 'Lower walls rebuilt after water got in.' },
        { t: 'Finishing someone else’s start', d: 'Board’s up but never got taped. We’ll take it from there.' },
      ],
    },
    process: {
      h: 'How it comes together',
      steps: [
        { t: 'We check it’s ready', d: 'Framing, wiring, plumbing and insulation done and inspected.' },
        { t: 'We plan access', d: 'Panels where you’ll need to reach shut-off valves and cleanouts.' },
        { t: 'Ceilings and soffits', d: 'The fiddly part goes first.' },
        { t: 'Walls', d: 'Hung with as few seams as possible.' },
        { t: 'Finish and sand', d: 'Three coats, then smooth.' },
      ],
    },
    materials: {
      h: 'Questions to decide early',
      p: [
        'Drywall ceiling or drop ceiling? Drywall looks much better and gives you more headroom. A drop ceiling gives access to everything above. Most people pick drywall with a few access panels in the right spots.',
        'Want it quiet? If you’re planning a home theater or a teenager’s hangout, sound insulation in the ceiling is worth it. It has to go in before the drywall, so tell us early.',
      ],
    },
    benefits: {
      h: 'What you end up with',
      items: [
        { t: 'A real room', d: 'Not a basement that’s been dressed up.' },
        { t: 'More headroom', d: 'Tight soffits and a drywall ceiling save inches.' },
        { t: 'Peace of mind', d: 'Materials picked for below-ground conditions.' },
        { t: 'Easy access', d: 'To the valves and cleanouts you might need someday.' },
      ],
    },
    local: {
      h: 'Basements in New Berlin',
      p: [
        'Nearly every home here has a full basement, and with the generous footprints of local ranches, they can be big. That’s a lot of potential living space sitting under the house.',
        'Before finishing, it’s worth making sure the basement stays dry through a wet spring. If you’ve had water in the past, sort that out first. We’ll happily talk it through with you.',
      ],
    },
    faqs: [
      { q: 'Do you do the whole basement finish?', a: 'We do the drywall part: hanging and finishing. Framing, electrical and plumbing come first and need to be inspected before we start.' },
      { q: 'How long will my basement be a work zone?', a: 'About two weeks for the drywall stage. It’s mostly waiting for coats to dry, so we’re not there all day every day.' },
      { q: 'Will dust get upstairs?', a: 'We seal the stairwell and cover vents. Some fine dust is hard to avoid completely, but we keep it to a minimum and clean up.' },
      { q: 'What if my basement has had water?', a: 'Tell us. If the cause is fixed, finishing is usually fine. If it isn’t, we’d be doing you a disservice to cover it up.' },
      { q: 'Can you match the drywall upstairs?', a: 'Yes, whether that’s smooth or textured.' },
    ],
    related: ['drywall-installation', 'water-damaged-drywall-repair', 'drywall-finishing', 'residential-drywall-services'],
    ba: { before: 'new-house-interior-drywall-taped', after: 'finished-rec-room-pool-table', beforeAlt: 'Room with drywall hung and joints taped', afterAlt: 'Finished basement rec room' },
  },
  {
    slug: 'ceiling-drywall-repair',
    name: 'Ceiling Drywall Repair',
    short: 'Cracks, sags and stains overhead, fixed so they stay fixed.',
    title: 'Ceiling Drywall Repair in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Ceiling drywall repair in New Berlin. Cracks, sagging, nail pops and old leak stains repaired properly and blended in. Friendly service, free estimates.',
    h1: 'Ceiling drywall repair in New Berlin',
    lede: 'If you’ve been staring at a crack in the ceiling, let’s get it sorted.',
    quick: 'We find out why the ceiling cracked or sagged, secure it, re-tape the joint and blend the repair. Most ceiling repairs take two or three short visits.',
    photo: 'scraping-ceiling-texture-trowel',
    photoAlt: 'Hand in a white glove working on a damaged ceiling with a wide trowel',
    intro: [
      'Ceiling problems have a way of catching your eye at exactly the wrong moments. Lying on the couch. Hosting dinner. Showing the house to a buyer.',
      'The good news: most of them aren’t serious, and nearly all can be repaired without replacing the whole ceiling. The trick is fixing the reason it happened, so you’re not looking at the same crack next year.',
    ],
    what: {
      h: 'Why ceilings crack and sag',
      p: [
        'A straight crack is almost always a seam between two sheets of drywall. The tape over it has come loose. Smearing filler into the crack won’t hold, because the seam still moves.',
        'Sagging usually means the drywall is too thin for the span, has too few screws, or got wet at some point. Small bumps in a row are “nail pops”, where the fastener has backed out as the wood dried.',
      ],
    },
    situations: {
      h: 'What we fix',
      items: [
        { t: 'Cracks along seams', d: 'Re-taped so they stop coming back.' },
        { t: 'Cracks where the wall meets the ceiling', d: 'Common in winter here, and fixable.' },
        { t: 'Nail pops', d: 'Screwed down tight and smoothed over.' },
        { t: 'Sagging sections', d: 'Re-fastened or replaced.' },
        { t: 'Old water stains', d: 'Sealed, or cut out if the board is soft.' },
        { t: 'Holes from old lights', d: 'Patched after fixtures are moved.' },
      ],
    },
    process: {
      h: 'How we do it',
      steps: [
        { t: 'Figure out the cause', d: 'So the fix lasts.' },
        { t: 'Cover the room', d: 'Everything below gets protected.' },
        { t: 'Secure the drywall', d: 'New screws into the joists.' },
        { t: 'Re-tape and coat', d: 'Fresh tape, three coats, spread wide.' },
        { t: 'Match the texture', d: 'So the repair blends in.' },
      ],
    },
    materials: {
      h: 'A note on painting',
      p: [
        'Ceilings are tricky to touch up. Even with the same can of paint, a patch of new paint usually shows as a slightly different shade. For an invisible result, plan to repaint the whole ceiling.',
        'If your ceiling is textured, we’ll match it. If it’s popcorn, a patch will always be visible, and that’s often the push people need to have it removed.',
      ],
    },
    benefits: {
      h: 'Why it’s worth doing',
      items: [
        { t: 'It stops nagging at you', d: 'One less thing to notice every evening.' },
        { t: 'It won’t come back', d: 'Because we fixed the cause.' },
        { t: 'It’s safer', d: 'Sagging ceilings are secured.' },
        { t: 'It helps when selling', d: 'Buyers notice ceilings.' },
      ],
    },
    local: {
      h: 'Why ceilings crack around here',
      p: [
        'Blame the weather. In deep cold, roof trusses flex slightly and lift the ceiling at the edges. You get a crack in the corner in January that closes up by June. It’s so common in Wisconsin it has a name: truss uplift.',
        'It isn’t a sign your house is falling apart. There’s a way to fasten the drywall so the corner can flex without tearing, and that’s how we repair it.',
      ],
    },
    faqs: [
      { q: 'Is a ceiling crack serious?', a: 'Usually not. Thin, straight cracks are cosmetic. If a crack is wide, growing, or comes with a sagging ceiling, have it looked at soon.' },
      { q: 'Why does it keep coming back after I fill it?', a: 'Filler alone can’t hold a moving seam. It needs to be re-secured and re-taped.' },
      { q: 'Do you have to replace the whole ceiling?', a: 'Rarely. Most repairs are local. We only suggest replacing when the damage is widespread.' },
      { q: 'How long does it take?', a: 'Two or three short visits over consecutive days, because each coat needs to dry.' },
      { q: 'Will there be a lot of dust?', a: 'We cover the room and use vacuum sanders, then clean up. It’s a small job as dusty work goes.' },
    ],
    related: ['popcorn-ceiling-removal', 'water-damaged-drywall-repair', 'drywall-repair', 'drywall-patching'],
    ba: { before: 'scraping-ceiling-texture-trowel', after: 'bright-empty-room-new-drywall-windows', beforeAlt: 'Damaged ceiling surface being scraped back', afterAlt: 'Smooth, bright finished ceiling' },
  },
  {
    slug: 'drywall-taping-mudding',
    name: 'Drywall Taping & Mudding',
    short: 'Hung it yourself? We’ll do the tricky part.',
    title: 'Drywall Taping & Mudding in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Drywall taping and mudding in New Berlin for DIY and contractor-hung board. Paper tape, three coats, sanded smooth and ready for primer.',
    h1: 'Drywall taping and mudding in New Berlin',
    lede: 'You did the heavy lifting. Let us handle the part that takes years to get good at.',
    quick: 'If your drywall is already hung, we tape the seams, apply three coats of compound and sand it smooth. Most rooms take four to five days because of drying time.',
    photo: 'knife-spreading-compound-over-seam',
    photoAlt: 'Gloved hands spreading joint compound over a drywall seam with a wide knife',
    intro: [
      'Hanging drywall yourself is a great way to save money on a project. Taping it yourself is how a lot of weekends disappear. It looks easy on video. Then you try it, and there are ridges, bubbles and more sanding than you thought possible.',
      'No shame in tapping out at that point. Plenty of our customers hang their own board and call us for the finishing. It’s a sensible split.',
    ],
    what: {
      h: 'What “taping and mudding” means',
      p: [
        '“Mud” is joint compound. Every seam between sheets gets a strip of paper tape pressed into mud, then two more coats on top, each wider and thinner. Screw heads and corners get the same treatment.',
        'Done right, the seams vanish and the wall looks like one continuous surface. Done wrong, you can see every joint through the paint. The difference is mostly practice, and this is what we do every week.',
      ],
    },
    situations: {
      h: 'Who this is for',
      items: [
        { t: 'DIYers', d: 'You hung the basement or garage and want it finished properly.' },
        { t: 'Remodelers and handymen', d: 'Who’d rather sub out the finishing.' },
        { t: 'Anyone with a stalled project', d: 'Board that’s been up, untaped, for longer than you’d like to admit.' },
        { t: 'People unhappy with a first attempt', d: 'We can fix or redo taping that didn’t turn out.' },
      ],
    },
    process: {
      h: 'What we’ll do',
      steps: [
        { t: 'Check the hanging', d: 'Screws too proud? Big gaps? We’ll fix them first.' },
        { t: 'Tape', d: 'Paper tape bedded into every seam and corner.' },
        { t: 'Second coat', d: 'Covers the tape and starts leveling.' },
        { t: 'Third coat', d: 'Thin and wide, feathered to nothing.' },
        { t: 'Sand', d: 'Lightly, with dust collection.' },
      ],
    },
    materials: {
      h: 'Tips if you’re hanging it yourself',
      p: [
        'Sink the screws just below the surface without tearing the paper. Keep gaps between sheets under a quarter inch. Use the longest sheets you can manage to cut down on seams. And put the factory-tapered edges together wherever possible.',
        'Do those four things and finishing goes faster, which keeps your cost down. If you’re not sure about something before you start, ask us. We’d rather answer a question than fix a problem.',
      ],
    },
    benefits: {
      h: 'Why it’s worth hiring out',
      items: [
        { t: 'Seams you can’t see', d: 'Even in bright light.' },
        { t: 'Much less dust', d: 'Clean work needs little sanding.' },
        { t: 'Your weekends back', d: 'We’ll have it done in days.' },
        { t: 'You still saved money', d: 'By hanging it yourself.' },
      ],
    },
    local: {
      h: 'DIY country',
      p: [
        'New Berlin has a lot of hands-on homeowners. Bigger lots, bigger garages and bigger basements seem to bring out the project-tackler in people. We’re glad to be the crew that finishes what you started.',
        'One seasonal note: compound won’t cure in a cold garage in January. If that’s your project, we’ll bring heat or plan it for warmer weather.',
      ],
    },
    faqs: [
      { q: 'Will you really finish drywall I hung?', a: 'Absolutely. We’ll look it over first and let you know if anything needs fixing before we tape.' },
      { q: 'What if my hanging isn’t great?', a: 'Most issues are easy to correct: a few screws, a gap to fill. We’ll tell you honestly and price it fairly.' },
      { q: 'Should I buy the materials?', a: 'We normally bring our own tape and compound. It’s included in the price.' },
      { q: 'Can I paint right after?', a: 'Once we’ve sanded, prime with a drywall primer and then paint.' },
      { q: 'How is this priced?', a: 'Usually by the amount of drywall, adjusted for ceiling height and how much corner work there is.' },
    ],
    related: ['drywall-finishing', 'drywall-installation', 'garage-drywall-installation', 'basement-drywall-installation'],
    ba: { before: 'new-house-interior-drywall-taped', after: 'bright-empty-room-new-drywall-windows', beforeAlt: 'Drywall with taped seams and first coat', afterAlt: 'Smooth finished walls in a bright room' },
  },
  {
    slug: 'drywall-finishing',
    name: 'Drywall Finishing',
    short: 'Smooth, paint-ready walls, with the finish level explained in plain English.',
    title: 'Drywall Finishing in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Drywall finishing in New Berlin. Level 4 and Level 5 smooth finishes, skim coats over old texture, and light textures, explained simply and done carefully.',
    h1: 'Drywall finishing in New Berlin',
    lede: 'The finish is what you see every day. Here’s how to choose the right one, and how we deliver it.',
    quick: 'Level 4 is the standard smooth finish for most rooms. Level 5 adds a full skim coat and is best for bright rooms and shinier paints. We can also skim over old texture to make walls smooth.',
    photo: 'trowel-skim-coat-gray-wall',
    photoAlt: 'Hand holding a steel trowel against a freshly skim-coated wall',
    intro: [
      'Here’s something most people don’t find out until after the painters leave: paint doesn’t hide anything. If the wall underneath has ridges or visible seams, a fresh coat just makes them shinier.',
      'So the finish matters. It’s the last thing we do and the first thing you’ll notice. Our job is to help you pick the right level for each room, and then make it look the way you pictured.',
    ],
    what: {
      h: 'Finish levels, simply',
      p: [
        'Finishers grade their work from Level 0 to Level 5. You only need to know two. Level 4 means the seams and screws have three coats and the wall is sanded smooth. It’s what most homes have and it looks great with flat or matte paint.',
        'Level 5 takes it one step further with a thin coat of compound over the entire wall. That evens everything out so seams can’t show through, even with sunlight streaming along the wall or a satin paint.',
      ],
    },
    situations: {
      h: 'When Level 5 is worth it',
      items: [
        { t: 'Rooms with lots of windows', d: 'Side light shows every flaw.' },
        { t: 'Satin, semi-gloss or dark paint', d: 'Shine and deep color magnify seams.' },
        { t: 'Ceilings with recessed lights', d: 'They throw light sideways across the surface.' },
        { t: 'Long hallways', d: 'You look down the length of the wall.' },
        { t: 'Going from textured to smooth', d: 'A skim coat is how it’s done.' },
      ],
    },
    process: {
      h: 'Our finishing process',
      steps: [
        { t: 'Talk it through', d: 'Lighting, paint and budget, room by room.' },
        { t: 'Apply the coats', d: 'With proper drying time in between.' },
        { t: 'Skim if needed', d: 'A full coat for Level 5 areas.' },
        { t: 'Sand with a light', d: 'A bright lamp shows us what you’d see later.' },
        { t: 'Final look together', d: 'You check it before we go.' },
      ],
    },
    materials: {
      h: 'Smooth or textured?',
      p: [
        'Smooth walls are the modern favorite and they’re easier to patch invisibly down the road. They do show dings more readily.',
        'A light orange peel or knockdown texture is more forgiving and a bit less expensive. It’s also what many New Berlin homes already have, so if we’re only doing part of a room, matching it makes sense. We’ll show you samples of each.',
      ],
    },
    benefits: {
      h: 'What a good finish gives you',
      items: [
        { t: 'Paint that looks professional', d: 'Even if you do the painting yourself.' },
        { t: 'No ghost lines', d: 'Seams stay hidden in every light.' },
        { t: 'Freedom to choose any paint', d: 'Including darker or shinier ones.' },
        { t: 'A room that feels finished', d: 'It’s subtle, but you feel it.' },
      ],
    },
    local: {
      h: 'Finishing for New Berlin homes',
      p: [
        'Many homes here are being opened up: walls removed between kitchen and living areas, bigger windows, more recessed lighting. All of that looks fantastic and all of it is hard on a basic finish.',
        'If you’re remodeling that way, mention it when we talk. Upgrading the main living area to Level 5 is a small part of the budget and saves a lot of regret.',
      ],
    },
    faqs: [
      { q: 'Do I really need Level 5?', a: 'Often not. For bedrooms and closets with flat paint, Level 4 is perfect. We’ll only recommend Level 5 where you’d see the difference.' },
      { q: 'Can you make my textured walls smooth?', a: 'Yes. We skim coat over the texture, usually two or three passes, then sand.' },
      { q: 'Why can I see seams through my paint?', a: 'The seams and the drywall paper soak up paint differently. A skim coat and a good primer fix it.' },
      { q: 'What primer should I use?', a: 'A drywall primer-sealer, ideally a high-build one for smooth walls. We’ll point you to the right kind.' },
      { q: 'Can you finish just one wall?', a: 'Yes. Accent walls and fireplace walls are common requests.' },
    ],
    related: ['drywall-taping-mudding', 'drywall-installation', 'popcorn-ceiling-removal', 'residential-drywall-services'],
    ba: { before: 'trowel-skim-coat-gray-wall', after: 'living-room-media-wall', beforeAlt: 'Wall in the middle of a skim coat', afterAlt: 'Finished living room with smooth painted walls' },
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    short: 'Cracks, dents, nail pops and banged-up corners, all handled in one visit.',
    title: 'Drywall Repair in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Drywall repair in New Berlin for cracks, nail pops, dents, loose tape and damaged corners. We fix the cause, smooth it over and match your texture.',
    h1: 'Drywall repair in New Berlin',
    lede: 'Make a list of everything that bugs you. We’ll work through it.',
    quick: 'We repair cracks, nail pops, dents, peeling tape and damaged corners, usually over two or three short visits. Grouping repairs into one job saves you money.',
    photo: 'setting-corner-bead-window',
    photoAlt: 'Tradesman fitting metal corner bead to the edge of a window opening',
    intro: [
      'Every house collects them. The crack above the bedroom door. The row of little bumps on the ceiling. The corner by the stairs that the vacuum keeps hitting. None of it is urgent, so it waits. And waits.',
      'Then one day you decide to paint, or sell, or you just get tired of looking at it. That’s when we come in. We’ll go room by room and fix the lot.',
    ],
    what: {
      h: 'Repairs that last',
      p: [
        'There’s a quick way to fix drywall and a right way. The quick way is filler and paint. It looks fine for a few months, then the crack is back.',
        'The right way is to find out what caused it. A crack means tape has failed or something is moving. A nail pop means a fastener has come loose. We fix that first, by adding screws, replacing tape or swapping out bent corner bead, and then make it smooth.',
      ],
    },
    situations: {
      h: 'The usual suspects',
      items: [
        { t: 'Cracks by doors and windows', d: 'Diagonal ones from the corners are very common.' },
        { t: 'Nail pops', d: 'Small round bumps, often a few in a line.' },
        { t: 'Peeling tape', d: 'Seams lifting or bubbling, usually in corners.' },
        { t: 'Dented corners', d: 'Hallways and stairways take the hits.' },
        { t: 'Dings and gouges', d: 'From moving furniture and daily life.' },
        { t: 'Bad old patches', d: 'We’ll redo them so they blend.' },
      ],
    },
    process: {
      h: 'How a repair visit goes',
      steps: [
        { t: 'Walk through together', d: 'Point out everything. We’ll probably spot a few more.' },
        { t: 'Protect the area', d: 'Drop cloths and plastic.' },
        { t: 'Fix what’s underneath', d: 'Screws, tape, corner bead.' },
        { t: 'Smooth it over', d: 'Two or three coats, feathered out.' },
        { t: 'Sand and match', d: 'Texture matched, ready for primer.' },
      ],
    },
    materials: {
      h: 'A money-saving tip',
      p: [
        'Group your repairs. Most of the cost of a small drywall job is getting there and setting up. Once we’re in the house, fixing ten spots doesn’t cost ten times as much as fixing one.',
        'So before we visit, walk around with a roll of painter’s tape and mark everything. It’s oddly satisfying, and it makes sure nothing gets missed.',
      ],
    },
    benefits: {
      h: 'Why now is a good time',
      items: [
        { t: 'Before painting', d: 'So the new paint has a good surface.' },
        { t: 'Before selling', d: 'Clean walls photograph and show better.' },
        { t: 'After buying', d: 'Start fresh in your new place.' },
        { t: 'Just because', d: 'You’ve looked at it long enough.' },
      ],
    },
    local: {
      h: 'Why New Berlin walls crack',
      p: [
        'Our climate swings from humid summers to very dry, furnace-heated winters. Wood framing swells and shrinks with it, and drywall seams take the strain. A few cracks and pops after ten or fifteen winters is completely normal.',
        'It doesn’t mean anything is wrong with your house. It just means it’s a house in Wisconsin.',
      ],
    },
    faqs: [
      { q: 'Are cracks a sign of a foundation problem?', a: 'Almost never. Hairline cracks at seams and openings are seasonal movement. Wide or fast-growing cracks, or doors that suddenly stick, are worth having a structural pro check.' },
      { q: 'What’s a nail pop?', a: 'A nail or screw that’s worked loose and pushed out its little cap of compound. We add a screw beside it and smooth it over.' },
      { q: 'Can you come before my painter?', a: 'Yes, that’s ideal. Give us the painter’s date and we’ll plan backward.' },
      { q: 'How do you charge?', a: 'One price for the whole list, given after we’ve seen it.' },
      { q: 'Do you match texture?', a: 'Yes. Smooth, orange peel and knockdown all match well.' },
    ],
    related: ['drywall-patching', 'ceiling-drywall-repair', 'water-damaged-drywall-repair', 'drywall-finishing'],
    ba: { before: 'setting-corner-bead-window', after: 'bright-hall-spiral-staircase', beforeAlt: 'Corner repair in progress with new bead', afterAlt: 'Bright finished hall with crisp corners and smooth walls' },
  },
  {
    slug: 'drywall-installation',
    name: 'Drywall Installation',
    short: 'New walls and ceilings for additions, remodels and new builds.',
    title: 'Drywall Installation in New Berlin, WI | New Berlin Elite Drywall',
    description: 'Drywall installation in New Berlin for remodels, additions, basements and new homes. The right board for each room, hung neatly and ready to finish.',
    h1: 'Drywall installation in New Berlin',
    lede: 'The day the drywall goes up is the day your project starts to look like a room.',
    quick: 'We measure, deliver and hang the drywall, usually in a day or two for a room. Finishing follows and takes about a week. We can do both or either.',
    photo: 'screwing-ceiling-drywall-ladder',
    photoAlt: 'Installer on a ladder screwing drywall to a ceiling under steel framing',
    intro: [
      'There’s a moment in every remodel when the mess of studs, wires and pipes suddenly becomes a room. That’s drywall day, and it’s the most satisfying day of the whole project.',
      'It’s also a day when small decisions matter. How the sheets are laid out, where the seams land and how well they’re fastened all affect how your walls look for years. We sweat those details so you don’t have to.',
    ],
    what: {
      h: 'What good installation looks like',
      p: [
        'Fewer seams, for a start. We use long sheets and plan the layout so there are as few joints as possible, and so none of them land at the corner of a door or window where cracks like to start.',
        'We also check your framing before we cover it. A bowed stud makes a wavy wall, and it’s a two-minute fix now and a permanent annoyance later.',
      ],
    },
    situations: {
      h: 'Projects we install for',
      items: [
        { t: 'Kitchen and bath remodels', d: 'After the plumber and electrician are done.' },
        { t: 'Additions', d: 'New rooms tied neatly into the old.' },
        { t: 'Basements', d: 'The big step in finishing the lower level.' },
        { t: 'Garages', d: 'Fire-rated board for a cleaner, safer space.' },
        { t: 'New homes', d: 'Whole-house installs for builders.' },
        { t: 'One new wall', d: 'Dividing a room or closing a doorway.' },
      ],
    },
    process: {
      h: 'How it goes',
      steps: [
        { t: 'Measure and plan', d: 'We work out what board each room needs.' },
        { t: 'Deliver', d: 'Drywall is brought in and stacked where it’s needed.' },
        { t: 'Check framing', d: 'And fix anything that would show.' },
        { t: 'Hang', d: 'Ceilings first, then walls.' },
        { t: 'Tidy up', d: 'Scraps out, floor swept.' },
      ],
    },
    materials: {
      h: 'Not all drywall is the same',
      p: [
        'Regular drywall is fine for most walls. Bathrooms and laundry rooms need a moisture-resistant kind. Ceilings do better with a stiffer board that won’t sag. And the wall next to the garage needs a fire-rated one.',
        'Inside a shower, drywall isn’t the right choice at all. That’s a job for cement board or a waterproof backer. We’ll make sure each spot gets the right material.',
      ],
    },
    benefits: {
      h: 'What you’ll get',
      items: [
        { t: 'Flat, solid walls', d: 'That stay that way.' },
        { t: 'Fewer cracks later', d: 'Thanks to smart seam placement.' },
        { t: 'A smoother finish', d: 'Good hanging makes good finishing.' },
        { t: 'A clean handover', d: 'To us for finishing, or to whoever’s next.' },
      ],
    },
    local: {
      h: 'Installing in New Berlin',
      p: [
        'Most remodels here need a permit, and the city will want to inspect the framing, wiring, plumbing and insulation before any of it gets covered. So drywall can’t start until those inspections pass.',
        'If you’re not sure where your project stands, ask your contractor or call the building department. We’re happy to pencil you in and firm up the date once you get the green light.',
      ],
    },
    faqs: [
      { q: 'Do you bring the drywall?', a: 'Yes. Materials and delivery are part of our estimate.' },
      { q: 'What needs to be ready before you come?', a: 'Framing, electrical, plumbing and insulation done and inspected, and the space dry and heated.' },
      { q: 'How long does hanging take?', a: 'A room is usually a day. A whole basement, two or three.' },
      { q: 'Can you hang it and I’ll finish it?', a: 'You can, though finishing is the harder half. Most people have us do both.' },
      { q: 'Will it be loud?', a: 'Screw guns and some cutting, for a day or two. Nothing like demolition.' },
    ],
    related: ['drywall-taping-mudding', 'drywall-finishing', 'basement-drywall-installation', 'garage-drywall-installation'],
    ba: { before: 'screwing-ceiling-drywall-ladder', after: 'bright-empty-room-new-drywall-windows', beforeAlt: 'Drywall being fastened to a ceiling', afterAlt: 'Completed room with new smooth drywall' },
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
