/**
 * Extra homeowner-friendly sections for each service page (part 1 of 2).
 * General advice only. No prices, guarantees or business facts.
 */
export interface Extra {
  h: string;
  p?: string[];
  list?: string[];
  after?: string[];
}

export const moreA: Record<string, Extra[]> = {
  'commercial-drywall-services': [
    {
      h: 'What makes a commercial job cost more or less',
      p: [
        `If you’ve never hired for a build-out before, the pricing can feel like a mystery. It isn’t, really. Most of it comes down to four things: how much wall there is, how tall it is, whether any of it has to be fire-rated, and how easy it is to get people and materials into the space.`,
        `Tall walls cost more because they need lifts and longer board. Fire-rated walls cost more because they use thicker board, sometimes two layers, and every pipe or wire that passes through has to be sealed. A space on an upper floor with a small elevator costs more than one with a door to the parking lot, simply because everything takes more trips.`,
        `Timing matters too. If the work has to happen at night or on weekends so your neighbors or your own staff aren’t disturbed, tell us up front. We can do it, and it’s better to plan for it than to discover it halfway through.`,
      ],
    },
    {
      h: 'How to keep your project on schedule',
      p: [
        `Drywall lands in the middle of a build-out. The framing, wiring and plumbing come first. Paint, flooring and ceilings come after. So if the electrician runs two days late, we start two days late, and so does everybody behind us.`,
        `The best thing you can do is make decisions early. Where the doors go. Which walls get sound insulation. Where the TV, the shelving and the reception desk will mount, so backing can go in the wall before it’s closed. Changes after the board is up are always possible. They’re just a lot more expensive than changes on paper.`,
      ],
      list: [
        `Get your landlord’s rules in writing: work hours, elevator use, where the dumpster can go.`,
        `Confirm the heat will be on. Joint compound won’t dry properly in a cold space.`,
        `Ask your inspector what has to be approved before walls are closed.`,
        `Pick one person on your side to answer questions, so we’re never waiting on a decision.`,
      ],
      after: [
        `If you have a general contractor, they’ll handle most of this and we’ll work to their schedule. If you’re running the job yourself, that’s fine too. We’ll help you put the trades in the right order.`,
      ],
    },
    {
      h: 'Things business owners tell us they wish they had known',
      p: [
        `Sound travels more than you’d expect. A standard office wall stops at the ceiling tiles, and voices go right over the top. If privacy matters in a meeting room or an exam room, the wall should run higher and have insulation inside. That’s cheap to do during construction and painful to add later.`,
        `Not every wall needs the top finish. Your lobby and any long hallway with windows deserve the smoothest walls you can get. The stock room doesn’t. Splitting the finish levels this way puts the money where your customers will see it.`,
        `And dust is manageable. People picture a white cloud drifting through the whole building. With the work area sealed and the sanding done with vacuum tools, most of your neighbors won’t know we were there.`,
        `When we’re finished, we walk the space with you under good light before the painters arrive. It’s much easier to fix a small flaw at that point than after two coats of paint. Take your time on that walk and point at anything that bothers you. That’s what it’s for.`,
        `One last tip: keep a copy of the plans showing what’s inside each wall. The next time you add a sink, move a desk or hang something heavy, you’ll know exactly where the blocking, pipes and wires are.`,
      ],
    },
  ],
  'residential-drywall-services': [
    {
      h: 'What makes a home drywall job cost more or less',
      p: [
        `Every house is different, but the things that move the price are pretty consistent. Ceilings take longer than walls. High ceilings and stairwells take longer still, because we need scaffolding to reach them. Textured walls take longer than smooth ones if we’re matching a repair into them.`,
        `Repairs and new drywall are priced differently. New drywall is mostly about how much area there is. Repairs are mostly about time, and most of that time goes into blending the fix into the wall around it. That’s why having several repairs done in one visit is such a good deal. We’re already there, the tools are out, and everything dries together.`,
        `The finish you want matters as well. A big, bright living room with a smooth ceiling needs more care than a bedroom closet. Tell us which rooms you’re fussiest about and we’ll put the extra effort there.`,
      ],
    },
    {
      h: 'Can I do any of this myself?',
      p: [
        `Sure, some of it. Plenty of New Berlin homeowners are handy, and we’re happy to work alongside that. Filling nail holes before you paint is a great DIY job. So is clearing out a room, pulling off old trim, or even tearing out damaged drywall once you know nothing important is behind it.`,
        `Hanging new drywall is doable if you have a helper and a free weekend. It’s heavy, and ceilings are no fun, but it’s learnable. Finishing is where most people get stuck. Getting joints flat enough to disappear under paint takes a feel for the mud that only comes with a lot of practice.`,
        `If you’d like to split the work, just say so. We can do the part you don’t want and leave the rest to you. Call us before you start, though. A few tips on how to lay out the sheets will save you hours and make the finished walls look better.`,
      ],
    },
    {
      h: 'What it is like having us in your house',
      p: [
        `We know it’s a little strange having people working in your home. Here’s what to expect. On the first day we cover the floor from the door to the work area and hang plastic to close off the room. We cover the heating vents in that room so dust doesn’t travel.`,
        `Most jobs need a few visits, because joint compound has to dry between coats. Some visits are only an hour or two. In between, you can use the room as long as you don’t mind a bit of plastic. Keep the heat at a normal setting and a fan going if you have one, and everything dries on time.`,
      ],
      list: [
        `Take pictures and breakable things off the walls and shelves near the work.`,
        `Move furniture to the middle of the room, or out if it’s easy.`,
        `Keep pets and little ones out of the work area. Wet mud is very tempting to touch.`,
        `Let us know which door you’d like us to use and where we can park.`,
      ],
      after: [
        `At the end we sand, wipe the walls down, vacuum, and take all our trash with us. What’s left is a smooth wall that’s ready for primer. Speaking of which: please don’t skip primer. New drywall soaks up paint differently than a painted wall, and primer is what stops the repair from showing through.`,
        `If something comes up while the wall is open, like a pipe that looks questionable or wiring that isn’t what we expected, we’ll stop and show you before going further. You decide what happens next. We’d never close a wall over something we thought you should see.`,
      ],
    },
  ],
  'popcorn-ceiling-removal': [
    {
      h: 'What makes popcorn removal cost more or less',
      p: [
        `The biggest question is whether your ceiling has been painted. Popcorn that’s never been painted soaks up water and scrapes off in big, satisfying sheets. Popcorn that’s been painted, especially more than once, is sealed. Water can’t get in, and it comes off slowly and in small pieces. Same ceiling, very different amount of work.`,
        `The second question is what’s hiding under it. Builders often sprayed popcorn because it covered up quick, rough taping. Once the texture’s gone, the seams usually need a couple of coats of compound to look good. We include that in the price, because a scraped ceiling that hasn’t been smoothed isn’t really finished.`,
        `Other things that count: how high the ceiling is, how many rooms you’re doing, and how much furniture is staying. Doing several rooms at once is cheaper per room, because we only set up and clean up once.`,
      ],
    },
    {
      h: 'Should I scrape it myself?',
      p: [
        `Honestly? You can, and lots of people do. Scraping is the easy part. If your ceiling is unpainted and you don’t mind a messy weekend, a garden sprayer and a wide scraper will get the texture off.`,
        `Two cautions. First, testing. Popcorn installed before the mid-1980s can contain asbestos, and you can’t tell by looking at it. Please have a sample tested by a lab before you disturb it. It’s inexpensive, and it’s the one step we’d never skip. If the test comes back positive, removal is a job for a licensed abatement company, or we can cover the ceiling with new drywall and leave the texture alone.`,
        `Second, the part after scraping. A bare ceiling shows every seam, screw and gouge. Making it smooth is the hard bit, and it’s where most DIY jobs stall. If you’d like to scrape and have us do the smoothing, that works. Just go easy with the scraper so the paper underneath doesn’t tear.`,
      ],
    },
    {
      h: 'Getting ready, and what the week looks like',
      p: [
        `This is the messiest job we do, so preparation matters more than usual. The more you can take out of the room, the better. Whatever stays gets wrapped completely in plastic, and so do the floors and walls.`,
      ],
      list: [
        `Empty the room as much as you can, including closets if they have popcorn too.`,
        `Take down curtains, pictures and anything on the walls.`,
        `Decide whether you’re keeping your light fixtures. If you’re swapping them, now’s the time.`,
        `Plan to stay out of the room for several days.`,
      ],
      after: [
        `Day one is usually protection and scraping. After that come the skim coats, with drying time between each. Then sanding. The scraping goes fast, but the drying can’t be hurried, so a typical room takes most of a week from start to finish.`,
        `When we’re done, the ceiling is smooth and ready for primer and paint. A flat white ceiling paint is the most forgiving. You’ll be surprised how much taller and brighter the room feels.`,
      ],
    },
  ],
  'drywall-patching': [
    {
      h: 'What makes a patch cost more or less',
      p: [
        `Here’s the thing that surprises people: the size of the hole isn’t the main factor. A small hole and a medium one take nearly the same number of steps. Cut it clean, back it, fit a piece, tape it, three coats of mud, sand. The drywall itself is the cheap part.`,
        `What changes the price is how many patches there are, where they are, and whether your walls have a texture. One patch on its own means a trip out for a small job. Five patches in the same visit cost much less each. A patch at eye level in a hallway is simple. One on a ceiling or halfway up a stairwell takes longer.`,
        `Texture is the wild card. Smooth walls are the easiest to blend. If you have orange peel or knockdown, we have to recreate that pattern over the patch, and that takes a few test sprays to get right.`,
      ],
    },
    {
      h: 'Can I patch it myself?',
      p: [
        `For small stuff, absolutely. Nail holes and little dings just need a dab of lightweight spackle, a light sand, and a touch of primer. That’s a ten-minute job and you don’t need us for it.`,
        `Holes up to a couple of inches can be done with a stick-on patch from the hardware store. They work, but they leave a slight bump because the patch sits on top of the wall. If it’s behind a door, you may not care. If it’s in your front hall, you probably will.`,
        `Anything bigger than that needs a real piece of drywall with support behind it, and tape on the seams. This is where DIY patches usually go wrong. Without backing, the patch flexes and cracks. Without tape, the edges show up as a faint square within a few months. If you’ve tried once and it didn’t turn out, don’t feel bad. It’s one of the trickier small jobs in a house, and a failed patch can still be fixed.`,
      ],
    },
    {
      h: 'A few tips before and after',
      list: [
        `Send us a photo with your hand or a light switch in it so we can judge the size.`,
        `Tell us what caused the hole. If it was a leak, the leak needs to be fixed first.`,
        `Clear a few feet around the spot and take down nearby pictures.`,
        `If a doorknob did it, pick up a door stop. We can put it in while we’re there.`,
        `Dig out your leftover wall paint, if you have any, and check that it’s still good.`,
      ],
      after: [
        `Most patches take two short visits. On the first we do the cutting, fitting and first coats. On the second we put on the final coat, sand, and match the texture. Sometimes a small patch can be done in one longer visit with fast-setting compound.`,
        `Afterward the patch needs primer, then paint. If your wall paint is fairly new and you have the same can, you can often just paint the patched area. If the paint is a few years old, it will have faded a little, and you’ll get a better result painting the whole wall from corner to corner. We’ll tell you which we think you’ll need.`,
        `And if you’re planning to paint the room soon anyway, that’s the perfect time to have every little ding fixed at once. Walk around with a roll of painter’s tape, mark each spot, and we’ll take care of the lot.`,
      ],
    },
  ],
  'water-damaged-drywall-repair': [
    {
      h: 'What makes a water repair cost more or less',
      p: [
        `With water damage, what you can see is usually the smaller part. Water travels along the wood framing and soaks sideways through drywall, so the wet area behind the paint is often bigger than the stain. We check with a moisture meter and cut back until we reach dry board. That’s why we like to see it in person before giving you a firm number.`,
        `How long it stayed wet makes a big difference. A leak you caught the same day is usually a simple fix. Water that sat for a week can mean soft drywall, soaked insulation and sometimes mold on the back side. Ceilings cost more than walls, and wet insulation has to be replaced.`,
      ],
    },
    {
      h: 'What to do right now',
      p: [
        `If you’ve just found a leak, here’s the order to do things in. Don’t worry about the drywall yet. It’s the last step.`,
      ],
      list: [
        `Stop the water. Shut off the valve to that fixture, or the main if you can’t find it.`,
        `Move furniture, rugs and anything valuable out of the way.`,
        `Take photos of everything before you touch it, in case you file an insurance claim.`,
        `Get air moving. A fan pointed at the wet area helps a lot. A dehumidifier helps even more.`,
        `If a ceiling is bulging, stay out from under it and call us.`,
        `Get the source fixed by a plumber or roofer.`,
      ],
      after: [
        `Please don’t paint over the stain to hide it. Stain-blocking primer has its place, but only after everything is dry and solid. Painting over damp drywall traps the moisture, and you’ll see bubbling within weeks.`,
        `If you’re not sure the leak is really fixed, tell us. We’d much sooner leave the wall open for a few days so you can watch it than close it up and have the stain come back.`,
      ],
    },
    {
      h: 'About insurance and mold',
      p: [
        `We get asked about insurance a lot. Whether your policy covers the damage is between you and your insurer, and it often depends on what caused the leak. What we can do is give you a clear written description of what we’re removing and replacing. That’s usually what an adjuster wants to see.`,
        `On mold: a little surface mold on the back of wet drywall is common, and that drywall simply gets removed and thrown away. If we open a wall and find a lot of mold on the framing, or if someone in your home is sensitive to it, we’ll stop and tell you. Larger mold problems should be handled by a remediation specialist before the wall is rebuilt.`,
        `Once things are dry, the repair itself is routine. New insulation if needed, new drywall, tape, three coats, sanding, and texture to match. Then primer and paint, and you can stop thinking about it.`,
        `One small upgrade worth considering: if the leak came from a tub or shower valve, we can leave an access panel on the back side of that wall. It’s a small white door that lets a plumber reach the valve next time without cutting anything.`,
      ],
    },
  ],
  'garage-drywall-installation': [
    {
      h: 'What makes garage drywall cost more or less',
      p: [
        `Garages seem simple, and in some ways they are. Big flat walls, not many windows. But a few things can change the price quite a bit. The ceiling is the main one. If it’s a normal flat ceiling, no problem. If it’s high or follows the slope of the roof, we need scaffolding and it takes longer.`,
        `The framing spacing matters too. Many garage ceilings have trusses two feet apart, and that calls for thicker drywall so it doesn’t sag over time. And if your garage is attached to the house, the shared wall and often the ceiling usually need fire-rated board. Your local building department sets that rule, so it’s worth a quick call to confirm what yours needs.`,
        `Then there’s how finished you want it. Some people just want the joints sealed. Others want it smooth and painted like a room. Both are fine. One costs more.`,
      ],
    },
    {
      h: 'Do these things before the drywall goes up',
      p: [
        `This is the part people thank us for later. Once the walls are covered, adding anything inside them means cutting holes. So think ahead.`,
      ],
      list: [
        `Outlets. Add more than you think you need, including one on the ceiling for a door opener.`,
        `A dedicated circuit if you plan on a freezer, a compressor or an electric car charger.`,
        `Insulation in the walls and ceiling, especially if you might ever heat the garage.`,
        `Wood blocking wherever you’ll hang heavy shelves, cabinets or a bike rack.`,
        `A hose bib or a utility sink line, if you’ve always wanted one.`,
        `Extra light boxes on the ceiling. Garages are almost always too dark.`,
      ],
      after: [
        `If you tell us where your shelves and cabinets are going, we’ll mark the blocking on the finished wall so you can find it with a screw later.`,
      ],
    },
    {
      h: 'Can I hang garage drywall myself?',
      p: [
        `A garage is actually a decent place to learn. The walls are simple, and if the finish isn’t perfect, it’s a garage. The ceiling is the hard part. Thick sheets are heavy, and holding one overhead while you screw it in is a two-person job even with a rented lift.`,
        `If you want to hang it yourself and have us tape and finish, we’re glad to. Do check the fire-rating requirement first, because using the wrong board on the shared wall means doing it twice.`,
        `A few more things worth knowing. Keep the bottom edge of the drywall up off the concrete floor. Garage floors get wet from snow and rain, and drywall soaks up water like a sponge. And in winter, the garage needs heat while the joint compound dries. Mud that freezes is ruined.`,
        `When it’s all done, please do paint it, even a basic white. Bare drywall paper doesn’t hold up well in damp garage air. Paint protects it, and a white garage is so much brighter that you’ll wonder why you waited.`,
      ],
    },
  ],
};
