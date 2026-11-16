/** "Good to know" notes per service, plus the homepage guide. */

export const notes: Record<string, [string, string][]> = {
  'commercial-drywall-services': [
    ['Can you work while we stay open?', `Usually, yes. We close off the work area, do the noisy and dusty parts at the times that bother you least, and leave the shared areas clean at the end of every shift. Tell us your busy hours and we’ll plan around them.`],
    ['What should I have ready for an estimate?', `Floor plans if you have them, the ceiling height, and your target opening date. A quick walk through the space together fills in everything else.`],
  ],
  'residential-drywall-services': [
    ['How long will my room be out of action?', `For a small repair, a couple of short visits over two or three days, and you can use the room in between. For new drywall in a whole room, plan on about a week from hanging to ready for primer. Bigger projects take longer, and we’ll give you a schedule before we start so you can plan around it.`],
    ['Do you match texture?', `Yes. Orange peel, knockdown and most hand textures can be matched closely enough that the repair disappears once it’s painted. We test on a scrap board first so the pattern is right before it goes on your wall.`],
    ['Will the repair show?', `Done properly and primed, it shouldn’t. The two things that give a repair away are a bump you can feel and a dull patch in the paint. Wide feathering takes care of the first. Primer takes care of the second.`],
  ],
  'popcorn-ceiling-removal': [
    ['Is it worth doing before I sell?', `Often, yes. Popcorn ceilings date a house, and buyers notice them in photos. Smooth ceilings make rooms look brighter and more current. If you’re short on budget, start with the main living areas and the hallway, since those are the rooms buyers see first.`],
    ['Can you just cover it up?', `We can. If the texture is painted hard, or a test says it shouldn’t be disturbed, we can screw a thin layer of new drywall right over it and finish that. You lose less than an inch of height and skip most of the mess. We’ll tell you which approach makes more sense for your ceiling.`],
    ['What about my ceiling lights and fans?', `They come down or get wrapped before we start, and go back up when we’re done. If you’ve been thinking about adding recessed lights or moving a fixture, do it now. Cutting into a finished ceiling later means patching it again.`],
    ['Will it be dusty?', `Scraping is done damp, so there’s very little dust at that stage. It’s more of a wet, clumpy mess, and it all lands on the plastic. The sanding afterward makes some dust, which is why the room stays sealed until the end.`],
    ['Smooth or a light new texture?', `Smooth is what most people want. It also shows the most, so it takes more coats. A light knockdown texture hides small waves in an old ceiling and costs a bit less. Either one looks far better than popcorn.`],
  ],
  'drywall-patching': [
    ['Why did my old patch crack?', `Almost always because it wasn’t taped or wasn’t backed. Compound on its own can’t hold a seam together, so a hairline shows up around the edge. We can cut out a failed patch and redo it so it stays put.`],
    ['Can you fix a hole in a textured wall?', `Yes. Once the patch is flat, we rebuild the texture over it and blend it outward. Matching takes a few practice passes on a scrap board, and we don’t move to your wall until the pattern looks right.`],
    ['Do you patch after plumbers and electricians?', `All the time. Repiping and rewiring leave a trail of square holes. We close them all in one go and leave the walls ready for paint. If the tradesperson is still working, it’s best to wait until they’re completely finished so nothing gets cut twice.`],
    ['The paper is torn but there is no hole. Is that a patch?', `It needs attention, yes. Torn paper left bare will bubble when anything wet touches it, including paint. We seal it first, then skim over it so the wall is smooth again. It’s common after removing a mirror, tile or wallpaper.`],
  ],
  'water-damaged-drywall-repair': [
    ['The stain is dry. Can I just paint it?', `If the drywall is still hard when you press on it, and you know the leak is fixed, then yes. Use a stain-blocking primer first, or the mark will bleed straight through regular paint. If the spot feels soft or crumbly, it needs to be replaced.`],
    ['How do I know if it is still leaking?', `Draw a light pencil line around the edge of the stain and check it after the next rain or a few days of showers. If the stain grows past the line, the leak is still active. A moisture meter gives a faster answer, and we bring one to every water job.`],
    ['How long before you can close the wall?', `Until the wood inside reads dry. With a fan and a dehumidifier, that’s often two to four days. In a damp basement it can be longer. Closing up too soon is the most common reason these repairs fail.`],
    ['Do I have to replace the whole wall?', `Rarely. We cut out only what’s been damaged, plus a little extra to reach solid, dry board, and blend the new section into the rest. Once it’s painted you shouldn’t be able to tell where the old wall ends.`],
  ],
  'garage-drywall-installation': [
    ['Do I need a permit?', `It depends on your municipality and what else you’re doing. Adding wiring or insulation often does need one. A quick call to the City of New Berlin’s building inspection office will give you a clear answer, and we’re happy to work to whatever they require.`],
    ['Can you drywall just the ceiling?', `Yes. Plenty of people only want the ceiling closed in, to cover the trusses and hold insulation. We’ll check the framing spacing and use board that won’t sag.`],
    ['My garage is already full. Is that a problem?', `It’s workable. We need the walls clear and room to move a lift around. If everything can be grouped in the middle of the floor, we’ll cover it. If you can park it all in a storage pod or a neighbor’s garage for a week, the job goes faster.`],
    ['What finish do most people choose?', `For a garage that’s mainly for cars and storage, a taped finish with a couple of coats and a coat of white paint is the popular choice. It looks clean without paying for a living-room finish. If you’re building a workshop or a gym, go smoother.`],
    ['Will the drywall hold up to moisture and cold?', `Yes, if it’s kept off the floor and painted. Drywall handles cold fine. What it doesn’t like is sitting in water or being left as bare paper in damp air. A small gap at the bottom and a coat of paint solve both.`],
    ['Can you do it in winter?', `We can, as long as the garage is heated while the compound dries. A portable heater running for the days we’re taping is usually enough. We’ll talk through the options when we look at the space.`],
  ],
  'basement-drywall-installation': [
    ['Drywall ceiling or drop ceiling?', `Drywall looks more like the rest of your house and keeps as much height as possible. A drop ceiling lets you reach pipes and wires later. Some people do both: drywall in the main room and a removable section where the plumbing runs.`],
    ['Do I need special drywall down there?', `In the bathroom, yes. Moisture-resistant board is the right choice there and near the laundry or sump. For the rest of a dry basement, standard drywall is fine as long as it’s kept off the concrete floor.`],
    ['How long does a basement take?', `For an average basement, a few days to hang and about a week to finish, depending on how many soffits and rooms there are. We’ll give you a schedule so your painter and flooring installer can plan.`],
  ],
  'ceiling-drywall-repair': [
    ['The crack comes back every winter. Can it be fixed for good?', `Usually, yes. That pattern points to roof trusses lifting in the cold. The lasting repair lets the ceiling edge move with them instead of holding it rigid, so the corner stays closed. More compound on its own won’t do it.`],
    ['Can you match my ceiling texture?', `Most of the time. Knockdown and swirl patterns match well. Old popcorn is the hardest, because it yellows and flattens with age. If a match isn’t going to look right, we’ll say so and suggest redoing the whole ceiling in that room.`],
    ['Is a sagging ceiling dangerous?', `It can be if it’s holding water or has come loose from the framing. Keep people out from under it and get it looked at soon. If it’s a slow sag in an old, dry ceiling, it’s less urgent but still worth fixing before it gets worse.`],
    ['Do I have to repaint the whole ceiling?', `Almost always. Ceiling paint is flat, and touch-ups on flat paint show as lighter patches. One coat over the whole ceiling is the reliable way to make the repair disappear.`],
  ],
  'drywall-taping-mudding': [
    ['Paper tape or mesh?', `We use paper for nearly everything. It’s stronger across the seam and folds neatly into corners. Mesh is fine with fast-setting compound on small repairs, but mesh under regular premixed mud is behind a lot of the cracked seams we’re asked to fix.`],
    ['What is the difference between taping and finishing?', `People use the words loosely. Taping usually means bedding the tape and putting on the first coats. Finishing means the final coats and sanding that make the wall ready for paint. When we quote, we spell out exactly which coats are included so there’s no confusion.`],
    ['Can you fix bad taping someone else did?', `Yes. Bubbled tape gets cut out and redone. Ridges get sanded down and recoated wider. Seams that are too narrow get feathered out. If the walls are already painted, it’s still fixable, and they’ll need primer and paint again afterward.`],
    ['Do you tape garages and basements too?', `We do. Garages often just need a basic taped finish. Basements deserve a good one, since the ceilings are low and the lights are close. Tell us how the space will be used and we’ll suggest the right amount of finishing.`],
    ['How smooth will it be?', `Smooth enough that you can’t find the seams by eye or by hand once it’s primed. That’s the standard we check against with a work light before we pack up.`],
  ],
  'drywall-finishing': [
    ['Is a skim coat the same as Level 5?', `Close. Level 5 means the standard three coats plus a skim over the whole surface. On old walls, people say skim coat to mean smoothing everything out, which may take two or three passes. Either way, the goal is one even surface for the paint.`],
    ['Can you finish drywall that someone else hung and taped?', `Yes. We’ll look at what’s there, fix anything loose or cracked, and take it the rest of the way. Send a few photos and we can tell you roughly what it needs.`],
    ['When can I paint?', `As soon as the final coat is dry, sanded and dusted off, which is usually the day after our last visit. Prime first with a drywall primer. Then two coats of your color.`],
    ['Why do my existing walls look streaky?', `That’s often the seams showing through as a different sheen. It happens when new drywall was painted without primer, or when shiny paint went over a standard finish. A skim coat and proper primer will fix it.`],
    ['Does a smooth finish cost more than texture?', `Usually a little, yes, because texture hides small flaws and smooth doesn’t. Most people still choose smooth for the main rooms. It looks cleaner and it’s far easier to repair later.`],
  ],
  'drywall-repair': [
    ['How many visits does a repair take?', `Most need two or three short ones, a day or so apart, because each coat has to dry. A long list takes the same number of visits as a short one. They’re just longer visits.`],
    ['Can you fix the corners my movers smashed?', `Yes. Dented outside corners have a metal or plastic strip underneath. We cut out the bent section, put in a new piece, and coat it so the corner is straight again.`],
    ['Should I fix the walls before or after painting?', `Before, always. Repairs need primer and paint over them, so do the drywall work first and let the painter cover it all in one go. If you’re hiring a painter, we can time our work to finish just before they start.`],
    ['My house is brand new. Why are there cracks already?', `New lumber dries and shrinks during the first couple of years, and the drywall shows it. It’s normal. The smart move is to wait until the house has been through at least one full winter, then have everything fixed in a single visit.`],
    ['Do you repair plaster too?', `Small cracks and holes in plaster walls can often be repaired with drywall methods and the right bonding products. Send us a photo and tell us the age of the house, and we’ll let you know if it’s something we’d take on.`],
    ['Will you tell me if it is not worth fixing?', `Yes. If a wall or ceiling is so patched and uneven that another repair won’t look good, we’ll say so and explain the alternatives, like skim coating the whole surface or covering it with new board.`],
  ],
  'drywall-installation': [
    ['How long does it take to drywall a room?', `Hanging a typical bedroom takes a day or less. Taping and finishing take most of a week after that because of drying time. A whole floor or a basement runs longer, and we stagger the work so something is always moving.`],
    ['Do you supply the drywall?', `Yes. We measure, order the right types and lengths, and have it delivered. If you’ve already bought material, tell us what you have and we’ll check that it suits the job.`],
    ['What about the mess?', `Hanging makes scraps and some dust from cutting. We haul the scraps away and sweep up daily. Sanding at the end makes finer dust, and we seal off the area before that stage.`],
    ['Can you match the height of my existing walls?', `Yes. When new drywall meets old, the thickness has to match or you get a step at the seam. We check the existing board and use the same, then blend the joint so the transition disappears.`],
    ['Should walls be insulated for sound?', `If the room is a bedroom, bathroom or office, it’s worth thinking about. Insulation inside interior walls quiets things down a lot and costs little while the walls are open. It can’t be added afterward without opening them up again.`],
    ['Do you install drywall in bathrooms?', `Yes. We use moisture-resistant board on bathroom walls and ceilings. The area inside a shower or around a tub needs a proper tile backer board, which goes in at the same stage.`],
  ],
};

export const homeGuide = {
  h: 'The New Berlin homeowner’s guide to drywall',
  lede: `Never hired a drywall contractor before? Most people haven’t. Here’s what we’d tell a friend or neighbor who asked.`,
  sections: [
    {
      h: 'Drywall work comes in three parts',
      p: [
        `Hanging is putting the sheets on the wall. Taping is covering the seams and screws with tape and joint compound, which everyone calls mud. Finishing is the last coats and the sanding that make the wall smooth enough for paint.`,
        `Some jobs need all three. Some need only one or two. A repair squeezes all three into a small area, and then adds the trickiest step: blending the new bit into the old wall. When you ask anyone for a price, make sure you know which parts it covers.`,
      ],
    },
    {
      h: 'Fix the cause first',
      p: [
        `A lot of drywall damage is really a sign of something else. A stain means there’s been a leak. A crack means something moved. A hole behind a door means the door needs a stop.`,
        `We’ll always ask what caused the problem, and sometimes we’ll suggest calling a plumber or roofer before us. It’s not that we don’t want the work. We just don’t want you paying for the same repair twice.`,
      ],
    },
    {
      h: 'What New Berlin homes usually need',
      p: [
        `New Berlin has a real mix of houses. There are ranches and split-levels from the fifties, sixties and seventies, often with popcorn ceilings and basements that were finished a long time ago. There are newer subdivisions with tall ceilings and open floor plans. And there’s everything in between.`,
        `Older homes tend to need ceiling work, repairs to walls that have been patched many times, and basements redone properly. Newer homes mostly need the screw pops and hairline cracks fixed that show up as the framing dries out during the first few winters. Both are completely normal, and both are things we’re set up to handle.`,
      ],
    },
    {
      h: 'Why the weather matters',
      p: [
        `Joint compound dries by letting its water evaporate. So the temperature and humidity in your house decide how fast we can work.`,
        `In winter, a heated house dries things nicely. An unheated garage doesn’t dry them at all, so we bring in temporary heat. In summer, basements are damp and slow, and a dehumidifier makes all the difference. This is why we can’t always promise a job in fewer days. The mud dries when it dries, and rushing it leads to cracks.`,
      ],
    },
    {
      h: 'How to compare estimates',
      p: [
        `If you’re getting more than one price, and you should feel free to, make sure they’re for the same thing. Ask each contractor these questions.`,
      ],
      list: [
        `Does the price include hanging, taping and finishing, or only some of those?`,
        `What finish level is it? Standard, or the smoother top level?`,
        `Is texture matching included?`,
        `Who protects the floors and furniture, and who cleans up?`,
        `Is hauling away the debris included?`,
        `What isn’t included that I might assume is?`,
      ],
      after: [
        `When two prices are far apart, the difference is usually hiding in one of those answers. The cheaper one isn’t always worse, and the higher one isn’t always better. You just want to compare like with like.`,
      ],
    },
    {
      h: 'How to get a fast, accurate estimate',
      p: [
        `Photos are the biggest help. Take one from across the room and one up close, with your hand or a light switch in the picture so we can tell the size. Tell us roughly how big the room is and how high the ceiling is.`,
        `Let us know what caused the damage, whether the space is lived in, and when you’d like it done. If a painter or a flooring crew is booked for after us, give us that date. For small repairs, that’s often all we need to give you a price. For bigger jobs, we’ll come and measure.`,
      ],
    },
    {
      h: 'What you can do yourself',
      p: [
        `More than you might think. Filling nail holes before painting, clearing the room, pulling off old trim, even tearing out damaged drywall are all fair game for a handy homeowner. Some people hang their own sheets too.`,
        `The part to leave to a pro is the finishing. It looks easy on video. In real life, getting a seam flat enough to vanish under paint takes years of practice. If you want to do some of the work and have us do the rest, just tell us. We’ll price only our part.`,
      ],
    },
    {
      h: 'Living with the work',
      p: [
        `Most drywall jobs don’t mean moving out, or even giving up the room for long. We seal off the work area with plastic, cover the floors on our way in and out, and block the heating vents in that room so dust stays put.`,
        `Between visits you can usually use the space. There’s a faint smell while the mud dries and none once it’s cured. We tidy up at the end of each day and do a proper cleanup at the end of the job.`,
      ],
    },
    {
      h: 'Permits, in plain terms',
      p: [
        `Patching a wall doesn’t need a permit. Bigger projects, like finishing a basement or building an addition, generally do. On those jobs, an inspector has to approve the wiring, plumbing and insulation before the walls are closed.`,
        `The rules are set locally, so the City of New Berlin’s building inspection office is the place to ask what applies to your project. If you have a permit, tell us where things stand, and we’ll schedule the drywall for after the inspections.`,
      ],
    },
    {
      h: 'After we are done',
      p: [
        `Your walls will be smooth, sanded and wiped down. The next step is primer. Please don’t skip it. New drywall and joint compound soak up paint at different rates, and primer evens that out so your color looks the same everywhere.`,
        `After priming, have a look at the walls in daylight. If anything catches your eye, tell us. It’s a quick fix at that stage. Then paint, put the furniture back, and enjoy the room.`,
        `In a new space, don’t be alarmed if a hairline crack or a screw bump appears after the first winter. That’s the house settling in. It’s easy to touch up, and it usually doesn’t come back.`,
      ],
    },
    {
      h: 'Repair it or replace it?',
      p: [
        `People often assume damaged drywall has to be torn out. Usually it doesn’t. If the board is dry and solid, it can be repaired, and a good repair is invisible once it’s painted.`,
        `Replacement makes sense when drywall has been soaked, when it’s gone soft or crumbly, or when a wall or ceiling has been patched so many times that it will never look flat. In that last case, a skim coat or a new layer of thin drywall over the top is often the tidiest answer. We’ll always suggest the smaller job if the smaller job will last.`,
      ],
    },
    {
      h: 'A word on dust',
      p: [
        `It’s the thing people worry about most, so here’s the honest picture. Cutting and hanging make very little dust. Sanding makes the most, and it’s a fine white powder that travels if you let it.`,
        `We don’t let it. The room is sealed, the vents are covered, and we sand with vacuum tools where the surface allows. Afterward we vacuum, not sweep. You may find a light film in the work room for a day or two. You shouldn’t find it in the rest of the house.`,
      ],
    },
  ],
};
