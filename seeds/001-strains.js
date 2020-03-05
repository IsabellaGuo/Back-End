exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains')
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        {
          strain_id: 1,
          strain_name: '100-Og',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: '$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side.',
          strain_effects: 'Creative,Energetic,Tingly,Euphoric,Relaxed',
          strain_flavors: 'Earthy,Sweet,Citrus'
        },
        {
          strain_id: 2,
          strain_name: '98-White-Widow',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'The ‘98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. ‘98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakalōlō Seed Bank.  ',
          strain_effects: 'Relaxed,Aroused,Creative,Happy,Energetic',
          strain_flavors: 'Flowery,Violet,Diesel'
        },
        {
          strain_id: 3,
          strain_name: '1024',
          strain_type: 'sativa',
          strain_rating: '4.4',
          strain_description: '1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense.',
          strain_effects: 'Uplifted,Happy,Relaxed,Energetic,Creative',
          strain_flavors: 'Spicy/Herbal,Sage,Woody'
        },
        {
          strain_id: 4,
          strain_name: '13-Dawgs',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: '13 Dawgs is a hybrid of G13 and Chemdawg genetics bred by Canadian LP Delta 9 BioTech. The two potent strains mix to create a balance between indica and sativa effects. 13 Dawgs has a sweet earthy musk that brings a blend of woody citrus flavors. The effects of 13 Dawgs induce a happy, relaxed body buzz with a creative and focused mind that counters depression and stimulates the appetite.',
          strain_effects: 'Tingly,Creative,Hungry,Relaxed,Uplifted',
          strain_flavors: 'Apricot,Citrus,Grapefruit'
        },
        {
          strain_id: 5,
          strain_name: '24K-Gold',
          strain_type: 'hybrid',
          strain_rating: '4.6',
          strain_description: 'Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%; definitely not for novice users! ',
          strain_effects: 'Happy,Relaxed,Euphoric,Uplifted,Talkative',
          strain_flavors: 'Citrus,Earthy,Orange'
        },
        {
          strain_id: 6,
          strain_name: '3-Bears-Og',
          strain_type: 'indica',
          strain_rating: '0',
          strain_description: '3 Bears OG by Mephisto Genetics is an autoflowering cross of Bear OG, Karma’s OG Cut, and Triangle Kush. This indica-dominant strain generates pungent, flavorful buds in a smaller, more manageable plant size. Mephisto Genetics describes 3 Bears OG as a cornerstone to their artisanal collection, blending the best attributes of the fabled OG Kush with a compact, controllable growth structure. The 3 Bears OG has an approximate 70-day growth cycle and offers effects that stimulate the appetite while leading the body toward sleep.',
          strain_effects: 'None',
          strain_flavors: 'None'
        },
        {
          strain_id: 7,
          strain_name: '3-Kings',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'The 3 Kings marijuana strain, a holy trinity of Headband, Sour Diesel, and OG Kush, is a sativa-dominant hybrid and genetic masterpiece. Sour tanginess reek from the sage green buds, and its frosty coat gives you a fair warning of the 3 Kings’ potency. Medical patients will appreciate the versatility of this strain’s medicinal effects as it relieves pain, stress, and nausea without heavy sedation.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Hungry',
          strain_flavors: 'Earthy,Sweet,Pungent'
        },
        {
          strain_id: 8,
          strain_name: '303-Og',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'The indica-dominant 303 OG is a Colorado strain bred by crossing Pre-98 Bubba Kush and Chemdawg. Its parent strains pass on a complex flavor profile of coffee and spice with diesel undertones. Its buzz can be described as social and creative, a dreamy experience perfect for letting off steam at the end of the work day. The happy euphoria induced by 303 OG may help patients treating depression, anxiety, and stress disorders.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Giggly',
          strain_flavors: 'Citrus,Pungent,Earthy'
        },
        {
          strain_id: 9,
          strain_name: '3D-Cbd',
          strain_type: 'sativa',
          strain_rating: '4.6',
          strain_description: '3D CBD from Snoop Dogg’s branded line of cannabis strains was crafted with patients in mind. With a THC:CBD ratio of about 5:8, this earthy-flavored sativa is preferred for treating pain, inflammation, and muscle tension. Consumers susceptible to THC-induced anxiety may also appreciate the sobering, relaxing balance CBD has to offer.',
          strain_effects: 'Uplifted,Focused,Happy,Talkative,Relaxed',
          strain_flavors: 'Earthy,Woody,Flowery'
        },
        {
          strain_id: 10,
          strain_name: '3X-Crazy',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Also known as Optimus Prime, the indica-dominant 3X Crazy is a three-way cross between OG Kush, Bubba Kush, and Granddaddy Purple. Its aroma is comprised of sweet grape, spicy pepper, and earthy notes passed on by its Bubba Kush parent. This indica will leave you sedated with soothing full-body effects, but not before a brief phase of clear-headed cerebral psychoactivity. The relaxing effects induced by 3X Crazy can be used to treat a variety of severe symptoms, some of which include pain, spasms, tension, and insomnia. ',
          strain_effects: 'Relaxed,Tingly,Happy,Euphoric,Uplifted',
          strain_flavors: 'Earthy,Grape,Sweet'
        },
        {
          strain_id: 11,
          strain_name: '3Rd-Coast-Panama-Chunk',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: '3rd Coast Panama Chunk by Bedford Grow is a cross between East Coast Panama Chunk (Panama F7 x Deep Chunk) and Sour Diesel. This vigorous strain creates dense, resinous buds that reek of pine and fuel. Panama Chunk is a potent and versatile hybrid that provides immediate mood elevation and stress relief, making it ideal after a long day. The strain’s varied cerebral and physical effects help consumers abate anxiety and insomnia while also tending to migraines and muscular pain. ',
          strain_effects: 'Energetic,Happy,Talkative,Uplifted',
          strain_flavors: 'Pine,Diesel'
        },
        {
          strain_id: 12,
          strain_name: '501St-Og',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: '501st OG, bred by Rare Dankness, is an indica-dominant hybrid that crosses Skywalker OG with Rare Dankness #1. The colorful flowers are tinged with a wide spectrum of green, blue, red, and purple hues that give off a deep piney kush aroma that mixes with the sweetness of grape flavors. The potent indica effects make 501st OG a great nighttime strain to help with pain relief and trouble sleeping.',
          strain_effects: 'Relaxed,Euphoric,Sleepy,Happy,Talkative',
          strain_flavors: 'Earthy,Pine,Skunk'
        },
        {
          strain_id: 13,
          strain_name: '5Th-Element',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Elemental Seeds crossed Blackberry with All Spark OG to create this impressive strain. 5th Element produces huge yields of sticky buds that feature a powerful earthy, lemony smell and flavor. The effects are quite strong with a good mix of cerebral and body highs.',
          strain_effects: 'Relaxed,Focused,Euphoric,Uplifted,Aroused',
          strain_flavors: 'Earthy,Woody,Pine'
        },
        {
          strain_id: 14,
          strain_name: '707-Headband',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'This strain emerged from the Humboldt County, California and that area’s telephone area code is the source of its numerical moniker. It’s a cross between Sour Diesel, OG Kush and Master Kush. 707 Headband plants flower in 9 to 11 weeks and usually have large yields. An indica dominant hybrid, this strain is known to have high THC levels and can be strong, but it’s balanced enough to leave most users feeling “heady” and creative rather than sleepy. Because of this, it’s often used to treat tension and anxiety.',
          strain_effects: 'Euphoric,Happy,Uplifted,Talkative,Creative',
          strain_flavors: 'Earthy,Woody,Pungent'
        },
        {
          strain_id: 15,
          strain_name: '8-Ball-Kush',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Bred by Barney’s Farm, 8 Ball Kush is a pure indica variety descended from an Afghani landrace strain. Like many other cannabis varieties that come from the Hindu Kush region, 8 Ball Kush produces large amounts of crystal resin that blanket the buds. Its aroma is earthy and spicy, and you may find its effects to be more cerebrally stimulating than the average indica. A hardy and resilient plant, 8 Ball Kush has a 50 to 60 day flowering time indoors while outdoor gardens finish at the end of September.',
          strain_effects: 'Relaxed,Uplifted,Happy,Creative,Euphoric',
          strain_flavors: 'Citrus,Earthy,Pine'
        },
        {
          strain_id: 16,
          strain_name: '818-Og',
          strain_type: 'indica',
          strain_rating: '4.7',
          strain_description: 'Named after the telephone area code of the San Fernando Valley in Los Angeles, 818 OG is an OG Kush strain popular with patients for treating pain, loss of appetite, and insomnia. Not to be confused with the other OG cut named for the locale, the 818 OG has a very fruity flavor that is quite different from the sour, earthy fuel taste found in the SFV OG. ',
          strain_effects: 'Relaxed,Happy,Euphoric,Giggly,Sleepy',
          strain_flavors: 'Earthy,Diesel,Flowery'
        },
        {
          strain_id: 17,
          strain_name: '831-Og',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: '831 OG, aka Santa Cruz OG, is an indica-dominant strain developed by 831 Organiks. Created by crossing the rare and potent Inferno F1 cut with the West Coast mainstay, SFV OG, this combination of heavyweight indicas imbues consumers with deep relaxation that borders on sleepy, especially with continued consumption. The aroma is pure fuel while the flavor opens up with notes of pine, earth, and lemon. Enjoy this strain near the end of the day, but beware, this strain has been known to reach toward 30% THC.  ',
          strain_effects: 'None',
          strain_flavors: 'None'
        },
        {
          strain_id: 18,
          strain_name: '9-Pound-Hammer',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: '9 Pound Hammer is an 80% indica strain that crosses Gooberry, Hells OG, and Jack the Ripper. These dense buds are coated in resin, offering sweet grape and lime flavors. True to its indica dominance, effects are heavy and long-lasting, useful for pain and stress relief. Best grown indoors, 9 Pound Hammer will deliver a heavy yield, flowering between 50 and 60 days.',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Happy,Hungry',
          strain_flavors: 'Earthy,Sweet,Berry'
        },
        {
          strain_id: 19,
          strain_name: '91-Krypt',
          strain_type: 'indica',
          strain_rating: '4.7',
          strain_description: '91 Krypt by DNA Genetics is a potent strain by many names. Bred from the Chemdawg ‘91 stock crossed with DNA’s famous Captain Krypt OG, this strain was created for high potency cannabis consumers. It emits a deep, dank terpene profile that fills the room with skunk and swampy earth. With a THC content pushing over 20% on average, enjoy 91 Krypt to stimulate appetite while harnessing full body relaxation.',
          strain_effects: 'Relaxed,Euphoric,Happy,Hungry,Uplifted',
          strain_flavors: 'Earthy,Pungent,Berry'
        },
        {
          strain_id: 20,
          strain_name: 'A-10',
          strain_type: 'indica',
          strain_rating: '3.8',
          strain_description: 'A-10 has an earthy, hashy taste that provides a very heavy body stone.  Frequently used to treat insomnia and chronic pain.',
          strain_effects: 'Relaxed,Focused,Happy,Sleepy,Uplifted',
          strain_flavors: 'Citrus,Pungent,Sweet'
        },
        {
          strain_id: 21,
          strain_name: 'A-Dub',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Coming from the ever-popular Sour Diesel, OG Kush, and Chemdawg family tree, A-Dub has a solid reputation for its potency. This hybrid produces a well-balanced effect, creating a euphoric, happy buzz that is a great influence when expressing your creativity. Sour Double (a Sour Diesel/Sour Bubble cross) and Alien Dawg (Alien Technology crossed with Chemdawg) combine to birth this magnificent flower.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Sleepy',
          strain_flavors: 'Diesel,Pepper,Earthy'
        },
        {
          strain_id: 22,
          strain_name: 'A-Train',
          strain_type: 'hybrid',
          strain_rating: '4.1',
          strain_description: 'A-Train is a hybrid between Mazar I Sharif and the clone-only Arcata e-32 Trainwreck.  This hybrid gives you the classic stoned feeling.  Be ready for smiles and munchies when you jump on the A-Train.',
          strain_effects: 'Creative,Euphoric,Relaxed,Happy,Hungry',
          strain_flavors: 'Earthy,Woody,Citrus'
        },
        {
          strain_id: 23,
          strain_name: 'Acdc',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'ACDC is a sativa-dominant phenotype of the high-CBD cannabis strain, Cannatonic. One remarkable characteristic of ACDC is its THC:CBD ratio of 1:20, meaning this strain induces no psychoactive effects. Tests have put ACDC’s CBD content as high as 19%, which helps many patients treat pain, anxiety, epilepsy, multiple sclerosis, and the negative effects of chemotherapy, all without intoxication.',
          strain_effects: 'Relaxed,Happy,Uplifted,Focused,Euphoric',
          strain_flavors: 'Earthy,Pine,Woody'
        },
        {
          strain_id: 24,
          strain_name: 'Ak-47',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Don\'t let its intense name fool you: AK-47 will leave you relaxed and mellow. This sativa-dominant hybrid delivers a steady and long-lasting cerebral buzz that keeps you mentally alert and engaged in creative or social activities. AK-47 mixes Colombian, Mexican, Thai, and Afghani varieties, bringing together a complex blend of flavors and effects. While AK-47’s scent is sour and earthy, its sweet floral notes can only be fully realized in the taste. Created in 1992 by Serious Seeds, AK-47 has won numerous Cannabis Cup awards around the world for its soaring THC content. For those hoping to fill their gardens with this resinous, skunky hybrid, growers recommend an indoor environment with either soil or hydroponic setups. AK-47 is easy to grow and has a short indoor flowering time of just 53 to 63 days, while outdoor plants typically finish toward the end of October.',
          strain_effects: 'Happy,Relaxed,Uplifted,Euphoric,Energetic',
          strain_flavors: 'Earthy,Pungent,Woody'
        },
        {
          strain_id: 25,
          strain_name: 'Ak-48',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'Although it is a hybrid, the AK-48 high leans more towards typical sativa effects.  AK-48\'s parents are Ice and Jock Horror.  Its Ice mother has ancestors of Afghani, Skunk, Northern Lights and Shiva stock.',
          strain_effects: 'Happy,Energetic,Uplifted,Creative,Relaxed',
          strain_flavors: 'Earthy,Pungent,Citrus'
        },
        {
          strain_id: 26,
          strain_name: 'Aberdeen',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'Aberdeen is a variety of Agent Orange grown by Canadian LP Aphria. Like Agent Orange, Aberdeen combines the genetics of Orange Velvet and Jack the Ripper to create a mix of sweet orange and citrus flavors. The happy, uplifting effects of Aberdeen mirror Agent Orange and are regularly prescribed for anxiety, migraines, and gastrointestinal disorder.',
          strain_effects: 'Uplifted,Euphoric,Giggly,Energetic,Sleepy',
          strain_flavors: 'Menthol,Blue,Cheese,Chemical'
        },
        {
          strain_id: 27,
          strain_name: 'Abusive-Og',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'A popular Californian cut of OG Kush, Abusive OG is an indica strain that inherited the nickname of its original grower. Despite its violent name, Abusive OG will ease you into in a peaceful state of mind that fades over time to a full-body relaxation. True to its OG genetics, Abusive OG has an earthy spice aroma with subtle lemon undertones. Patients who don’t mind mental haziness might choose this strain to remedy pain, anxiety, appetite loss, and sleeplessness at the end of their day. Abusive OG may not produce the highest yields in the garden, but makes up for it with resin-caked buds.',
          strain_effects: 'Relaxed,Euphoric,Sleepy,Happy,Giggly',
          strain_flavors: 'Earthy,Pine,Diesel'
        },
        {
          strain_id: 28,
          strain_name: 'Acapulco-Gold',
          strain_type: 'sativa',
          strain_rating: '4.5',
          strain_description: 'One of the most well-known strains, Acapulco Gold has been likened to dinner at a five-star restaurant. The strain comes from the areas in and around Acapulco, Mexico. Its orange hairs resemble a gold nugget, with gold, green, and brown colors of resin collecting on the buds. An aroma of burnt toffee lingers when the bud is broken up. Acapulco Gold has a reputation for being one of the best cannabis strains ever created, and is becoming more difficult to find due to more growers moving indoors. ',
          strain_effects: 'Happy,Uplifted,Euphoric,Energetic,Relaxed',
          strain_flavors: 'Earthy,Sweet,Pungent'
        },
        {
          strain_id: 29,
          strain_name: 'Ace-Killer-Og',
          strain_type: 'indica',
          strain_rating: '4.8',
          strain_description: 'Ace Killer OG is an indica strain that boasts a high THC content and a pungent diesel aroma. Bred from White Fire OG, King’s Kush, Kosher Kush, and a mystery strain, Ace Killer OG inherits a heavy blanket of snow-like resin and hard-hitting effects that can stupefy even the most seasoned veteran.',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Happy,Uplifted',
          strain_flavors: 'Earthy,Diesel,Spicy/Herbal'
        },
        {
          strain_id: 30,
          strain_name: 'Ace-Of-Spades',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Ace of Spades is a creation from TGA Subcool Seeds that takes advantage of the popular sweet and sour combination that never goes out of style. A crossbreed of Black Cherry Soda and Jack the Ripper, this strain has an earthy berry and citrus smell that carries over into the taste with distinctly lemony flavors. Ace of Spades plants grow fast and need a lot of space because they will get both bushy and tall. Flowering occurs at 8 weeks and they are generally large and heavy. These buds are pretty to look at with a range of colors that can include purples, blues, and pinks all coated in orange hairs.',
          strain_effects: 'Relaxed,Euphoric,Happy,Sleepy,Hungry',
          strain_flavors: 'Earthy,Sweet,Woody'
        },
        {
          strain_id: 31,
          strain_name: 'Aceh',
          strain_type: 'sativa',
          strain_rating: '4.4',
          strain_description: 'Aceh, also called Atjeh, refers to the sativa varieties of cannabis that come from the Aceh region of Indonesia. These sativas typically grow tall and thin, and are considered the finest among Indonesia’s landrace varieties ',
          strain_effects: 'Creative,Euphoric,Talkative,Energetic,Happy',
          strain_flavors: 'Earthy,Mango,Lemon'
        },
        {
          strain_id: 32,
          strain_name: 'Acid',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Acid is Paradise Seeds’ take on the original New York Sour Diesel. Expect powerful body effects, including an uplifted, nearly psychedelic mental energy. This plant exhibits a metallic flavor that is representative of its namesake, with traditional notes of gas on the nose. Acid thrives in both indoor and outdoor environments, finishing in about 9 to 10 weeks. ',
          strain_effects: 'Creative,Happy,Euphoric,Energetic,Uplifted',
          strain_flavors: 'Lemon,Diesel,Earthy'
        },
        {
          strain_id: 33,
          strain_name: 'Acid-Dough',
          strain_type: 'sativa',
          strain_rating: '5',
          strain_description: 'Acid Dough by Ripper Seeds is a sativa-dominant strain with energetic effects. Created by crossing Lilly (Queen Mother x Congo) x OG Badazz, this strain offers sweet, candy-like aromas with bright pineapple flavors and a generous yield. Acid Dough has an approximate 65-70 day flowering time and colorful foliage. This strain responds well to cold temperatures during the finishing process, creating buds with deep violet hues and extra resin production. Acid Dough won 2nd Place Best Sativa at the 2017 Spannabis Champions Cups and 2nd Place at the 2016 Expogrow Cup. ',
          strain_effects: 'Talkative,Giggly,Happy,Hungry,Relaxed',
          strain_flavors: 'None'
        },
        {
          strain_id: 34,
          strain_name: 'Afcrack',
          strain_type: 'hybrid',
          strain_rating: '3.4',
          strain_description: 'Afcrack is a cannabis “speedball” of sorts. This strain incorporates Afgoo and Green Crack, polar opposites on the spectrum of indica and sativa varieties, to create a pseudo-sedative experience that rests in the muscles while invigorating the heart and mind. With spicy earth notes that indicate its Afghani heritage, this hybrid’s effects are situation-specific and will offer energy or sedation depending on the consumer’s level of activity.    ',
          strain_effects: 'Tingly,Euphoric,Happy,Relaxed,Uplifted',
          strain_flavors: 'Sweet,Flowery,Earthy'
        },
        {
          strain_id: 35,
          strain_name: 'Afghan-Big-Bud',
          strain_type: 'indica',
          strain_rating: '4',
          strain_description: 'Spawn from Afghani and Big Bud, Afghan Big Bud (or Big Bud Afghani) is characterized as a large plant with broad leaves and thick stems. It has a dense appearance, similar to Big Bud, and maintains the taste of Afghani, resulting in the best of both worlds. The effects come relatively quick but usually dissipate under two hours. ',
          strain_effects: 'Euphoric,Happy,Relaxed,Sleepy,Talkative',
          strain_flavors: 'Pungent,Lemon,Peach'
        },
        {
          strain_id: 36,
          strain_name: 'Afghan-Cow',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'This sweet-smelling and resinous sativa breed from Dr. Krippling Seeds is sure to keep you off the couch. Afghan Cow is bred from Ash, Kaya 47 (an AK-47 phenotype), and the beloved Kali Mist. The cerebral effects of this sativa are great for clear-headed daytime use. Having a high yield both indoors and out, this is an impressive plant with even more impressive effects.',
          strain_effects: 'Focused,Uplifted,Happy,Euphoric,Talkative',
          strain_flavors: 'Sweet,Vanilla'
        },
        {
          strain_id: 37,
          strain_name: 'Afghan-Diesel',
          strain_type: 'hybrid',
          strain_rating: '3.7',
          strain_description: 'Afghan Diesel is a hybrid strain with an aroma similar to a grapefruit and other citrus fruit. The taste has been described as light and sweet. This strain will have a more cerebral effect rather than body. The plant is characterized as having dark green leaves with purple colored buds. ',
          strain_effects: 'Euphoric,Relaxed,Uplifted,Happy,Creative',
          strain_flavors: 'Earthy,Diesel,Chemical'
        },
        {
          strain_id: 38,
          strain_name: 'Afghan-Hawaiian',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Afghan Hawaiian is an indica-dominant hybrid of UK Cheese and Lavender bred by Canadian LP OrganiGram, Inc. The sweet mix of earthy, cheese flavors has hints of licorice and caramel undertones and produces a rush of euphoria that levels off into deep relaxation. OrganiGram classifies Afghan Hawaiian with their NDS varieties and recommend it for neurological disorders and spasticity. ',
          strain_effects: 'Tingly,Sleepy,Relaxed,Energetic,Aroused',
          strain_flavors: 'Nutty,Earthy,Chestnut'
        },
        {
          strain_id: 39,
          strain_name: 'Afghan-Haze',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'Afghan Haze is a sativa-dominant hybrid that combines a resinous Afghani indica with a sweet-smelling Haze sativa. Created by former Sensi breeder Nevil Schoenmaker and Shantibaba of Mr. Nice Seeds, Afghan Haze balances energizing cerebral invigoration with soothing full-body effects. Its clear-headed relief allows patients to treat pain, depression, and appetite loss during the day, and heavier doses can help ease the mind and body into peaceful sleep. Afghan Haze may have an excruciatingly long indoor flowering time of 10 weeks, but the large harvests of potent, crystal-covered buds are worth waiting for. ',
          strain_effects: 'Sleepy,Relaxed,Giggly,Happy,Creative',
          strain_flavors: 'Earthy,Flowery,Tea'
        },
        {
          strain_id: 40,
          strain_name: 'Afghan-Kush',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Afghan Kush\'s roots trace back to the Hindu Kush mountain range near the Afghanistan-Pakistan border. There its genotype has been perfected over centuries, making it the ultimate source for hash such as charas and the sticky black Afghani hash. White Label Seed Company, a Sensi Seeds partner from the Netherlands, made the seeds of this strain available for everyone to grow. The buds of Afghan Kush develop into massive, blunt-topped nuggets full of resin; pure indica goodness with a heavy yield. Revered for its heavy resin content and powerfully sedating effects, Afghan Kush is a top choice for anyone looking to relax after a long day.',
          strain_effects: 'Relaxed,Sleepy,Happy,Hungry,Euphoric',
          strain_flavors: 'Earthy,Flowery,Woody'
        },
        {
          strain_id: 41,
          strain_name: 'Afghan-Skunk',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'This popular classic strain was originally developed in the United States to cross the pure indica genetics of an Afghani strain with the durable genes of Skunk plants. Afghan Skunk quickly spread to Amsterdam and beyond and is now considered one of the “classics.” Its resilient Skunk genes make this plant a popular recommendation for new growers, and its legendary high yields make it a favorite all around. Flowering happens around 8 weeks and the buds will have a menthol smell combined with the “sweet stink” skunks are known for. Tests have shown THC levels of about 17%, so the stink isn’t the only thing that’s potent about Afghan Skunk.',
          strain_effects: 'Sleepy,Relaxed,Happy,Hungry,Giggly',
          strain_flavors: 'Skunk,Woody,Sweet'
        },
        {
          strain_id: 42,
          strain_name: 'Afghan-Sour-Kush',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Afghan Sour Kush by MTG Seeds is an indica-dominant cross between Afghani and Sour Kush. Its heavy, relaxing effects are ushered in by a sweet berry aroma and a sharp spicy flavor typical of Kush varieties. Stout and sturdy, Afghan Sour Kush plants have tight internodal spacing and finish flowering in about 60 days.',
          strain_effects: 'Hungry,Relaxed,Aroused,Sleepy,Euphoric',
          strain_flavors: 'Earthy,Diesel,Pungent'
        },
        {
          strain_id: 43,
          strain_name: 'Afghan-Widow',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Afghan Widow is a strain with deep relaxing qualities that immediately envelop the body in a calming aura. This mid-level sedation is pleasant but not debilitating. However, with continued consumption, this strain may yield benefits for patients treating insomnia, nausea, physical discomfort, and some cancer treatment side effects. Afghan Widows lineage is a common sense cross of Afghan Kush and White Widow.  ',
          strain_effects: 'Creative,Energetic,Euphoric,Focused,Uplifted',
          strain_flavors: 'Flowery,Diesel,Sweet'
        },
        {
          strain_id: 44,
          strain_name: 'Afghani',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Afghani is a heavy indica strain named after its geographic origin, where the earliest varieties of cannabis are believed to have grown. Breeders worldwide have come to treasure Afghani for its heavy resin production which is passed on genetically. With a sweet, earthy aroma, Afghani delivers a deep, sedating relaxation and euphoria. Patients most commonly turn to this potent indica to treat insomnia, pain, and stress disorders.',
          strain_effects: 'Relaxed,Sleepy,Happy,Euphoric,Hungry',
          strain_flavors: 'Earthy,Sweet,Pine'
        },
        {
          strain_id: 45,
          strain_name: 'Afgahni-Bullrider',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'This strain has quite a few myths circulating about its original appearance. It blew up in San Diego before spreading to the rest of the West Coast. Afghani Bullrider is pretty to look at, with light green buds covered in orange hair, and has a strong sweet and sour smell with some piney freshness. This strain is a heavy hitter that delivers a strong body without the full sedative effects some indicas can have; it heads straight to the brain and may boost creative thoughts while providing physical relaxation. With its high levels of THC and CBD, Afghani Bullrider is recommended for chronic pain, insomnia, and anxiety.',
          strain_effects: 'Focused,Uplifted,Happy,Creative,Relaxed',
          strain_flavors: 'Lemon,Citrus,Sweet'
        },
        {
          strain_id: 46,
          strain_name: 'Afghani-Cbd',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Afghani CBD is a high-CBD variant of the landrace indica Afghani grown by Canadian LP Tilray. Named after its geographic origin Afghani CBD has relaxing, therapeutic properties that have shown potential to help those suffering with insomnia, chronic pain, and stress disorders.',
          strain_effects: 'Relaxed,Happy,Sleepy,Tingly,Creative',
          strain_flavors: 'Flowery,Chemical,Spicy/Herbal'
        },
        {
          strain_id: 47,
          strain_name: 'Afghanica',
          strain_type: 'hybrid',
          strain_rating: '4.1',
          strain_description: 'Afghanica is a strain created by Flying Dutchmen with a taste, form, and effects typical of Afghani varieties. Coupled with the yield, vigor, and general potency true to Skunks, it is a pleasure to grow and consume. This strain is cherished for its many medical applications including pain relief and insomnia, and its heavy physical characteristics are lent from its mother, Afghani #1.',
          strain_effects: 'Relaxed,Sleepy,Happy,Hungry,Euphoric',
          strain_flavors: 'Sweet,Flowery,Skunk'
        },
        {
          strain_id: 48,
          strain_name: 'Afghanimal',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Afghanimal by In House Genetics is a heavy indica-leaning cross of Afghani and Animal Cookies. This squat plant offers tight, rock-hard nuggets that reek of sweet, acrid earth intermixed with fruit and floral notes. It lends consumers heavy physical effects suited for pain relief, relaxation, and mood enhancement. Afghanimal’s smaller stature and snappy 7-8 week flowering time make it a perfect fit for indica-loving indoor growers seeking classic and modern indica-dominant genetics.',
          strain_effects: 'Hungry,Relaxed,Aroused,Sleepy,Focused',
          strain_flavors: 'Citrus,Skunk'
        },
        {
          strain_id: 49,
          strain_name: 'Afghooey',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Also known as Afgoo, Afghooey buds are light, fluffy, and heavily laden with a crystal coating of trichomes. Working this marijuana in your hand can become a very sticky situation. Smoking Afghooey provides you with a best of both worlds indica & sativa high.',
          strain_effects: 'Uplifted,Euphoric,Relaxed,Talkative,Creative',
          strain_flavors: 'Earthy,Sweet,Woody'
        },
        {
          strain_id: 50,
          strain_name: 'Afgoo',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Afgoo, also known as Afgooey, is a potent indica strain that is believed to descend from an Afghani indica and Maui Haze. Its sativa parent may lend Afgoo some uplifting, creative qualities, but this strain undoubtedly takes after its indica parent as it primarily delivers relaxing, sleepy effects alongside its earthy pine flavor. Growers hoping to cultivate Afgoo may have a better chance of success indoors, but this indica can also thrive in Mediterranean climates outdoors.',
          strain_effects: 'Relaxed,Sleepy,Happy,Euphoric,Hungry',
          strain_flavors: 'Sweet,Pine,Woody'
        },
        {
          strain_id: 51,
          strain_name: 'Afgooey',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Afgooey, also known as Afgoo, is a potent indica strain that is believed to descend from an Afghani indica and Maui Haze. Its sativa parent may lend Afgoo some uplifting, creative qualities, but this strain undoubtedly takes after its indica parent as it primarily delivers relaxing, sleepy effects alongside its earthy pine flavor. Growers hoping to cultivate Afgoo may have a better chance of success indoors, but this indica can also thrive in Mediterranean climates outdoors.',
          strain_effects: 'Relaxed,Happy,Sleepy,Giggly,Uplifted',
          strain_flavors: 'Woody,Pine,Pungent'
        },
        {
          strain_id: 52,
          strain_name: 'Afkansastan',
          strain_type: 'indica',
          strain_rating: '3.8',
          strain_description: 'Afkansastan is a relaxing Afghan landrace strain that packs a punch. It grows stout plants with dense, dark green buds that exhibit hints of purple and brick red pistils throughout. The smell is earthy and sweet, but shows off berry and stone fruit after grinding and on the exhale. This indica-dominant strain offers traditional sedative effects that curb physical discomfort, insomnia, and ignite the appetite. Utilize this strain later in the day to harness the best it has to offer.     ',
          strain_effects: 'Uplifted,Euphoric,Giggly,Happy,Relaxed',
          strain_flavors: 'Tobacco,Earthy'
        },
        {
          strain_id: 53,
          strain_name: 'Afpak',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Afpak, named for its direct Afghani and Pakistani landrace heritage, is a beautiful indica-dominant hybrid with light green and deep bluish purple leaves. The taste and aroma are floral with a touch of lemon, making the inhale light and smooth. Its effects start in the stomach by activating the appetite. There is also a potent relaxation that starts in the head and face, and gradually sinks down into the body. Enjoy this strain if you’re suffering from stress, mild physical discomfort, or having difficulty eating.  ',
          strain_effects: 'Relaxed,Creative,Focused,Sleepy,Happy',
          strain_flavors: 'Pine,Spicy/Herbal,Earthy'
        },
        {
          strain_id: 54,
          strain_name: 'African',
          strain_type: 'sativa',
          strain_rating: '3.9',
          strain_description: 'African refers to the indigenous varieties of cannabis (or landraces) that grow natively in this region of the world. Because of this region\'s latitude and climate, these native landrace strains tend to be sativa in structure and effect.',
          strain_effects: 'Euphoric,Energetic,Aroused,Tingly,Creative',
          strain_flavors: 'Spicy/Herbal,Pungent,Pepper'
        },
        {
          strain_id: 55,
          strain_name: 'Afrikaner',
          strain_type: 'sativa',
          strain_rating: '0',
          strain_description: 'Afrikaner by Cannabaal and master grower Waldo Botha is a pure South African landrace strain. This tall strain produces high levels of THCV alongside a healthy 20% THC content. It has an earthy hemp aroma, but the flavor is a “sweet picante weed stench,” or so says the producer. A pure sativa, Afrikaner energizes the body with a euphoric lust for life while keeping the mind fairly clear. Utilize this strain in the proper dosage to harness the physical stimulation and mood elevation for productive means.  ',
          strain_effects: 'None',
          strain_flavors: 'None'
        },
        {
          strain_id: 56,
          strain_name: 'Afternoon-Delight',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Afternoon Delight, created by Colorado Seed Inc., is a difficult strain to track down. Noted for its small, dense nuggets and an aroma of pine and pungent terpenes, Afternoon Delight is described as an indica-dominant hybrid with a hazy aura that engulfs the mind and body. But indulge with caution, as this hybrid has also been known for its potency. ',
          strain_effects: 'Talkative,Relaxed,Uplifted,Tingly,Creative',
          strain_flavors: 'Pungent,Citrus,Tropical'
        },
        {
          strain_id: 57,
          strain_name: 'Afwreck',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Afwreck is a hybrid cross of Afghani and Trainwreck.  Strong sativa effects with immediate head-concentrated high.',
          strain_effects: 'Euphoric,Happy,Uplifted,Relaxed,Sleepy',
          strain_flavors: 'Earthy,Pine,Pungent'
        },
        {
          strain_id: 58,
          strain_name: 'Agent-Orange',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Don’t let the name scare you! The only herbicidal warfare Agent Orange will wage is between the excellence of this strain\'s flavors and uplifting effects. A well-balanced hybrid that combines the smooth Orange Velvet with the bold Jack the Ripper, Agent Orange will capture your senses. Wonderful smells of oranges and fresh-cut citrus fruit will entice you immediately, while the pigments of deep maroon and purple will make this bud stand out in a sea of green. The effects are uplifting and motivating, serving as a great mood enhancer if you are feeling lethargic or depressed.',
          strain_effects: 'Happy,Uplifted,Relaxed,Energetic,Euphoric',
          strain_flavors: 'Citrus,Orange,Earthy'
        },
        {
          strain_id: 59,
          strain_name: 'Agent-Tangie',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'For those craving a cerebral buzz with a citrus kick, 3C Agent Tangie is perfect. The glittery colas are light green with a zesty, floral flavor. Its effects linger in the crown of the skull and disperse throughout the body in steady waves of invigoration. This strain may assist those suffering from perpetual procrastination, depression, and fatigue. ',
          strain_effects: 'Uplifted,Happy,Creative,Euphoric,Focused',
          strain_flavors: 'Skunk,Citrus,Orange'
        },
        {
          strain_id: 60,
          strain_name: 'Air-Jordan-Og',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Air Jordan OG, grown exclusively by Good as Gold in California, is a pure indica strain that packs a punch. Don’t let the name fool you: Air Jordan OG’s potent, sedating effects will have you melting deep into the couch, priming you for a nap or good night’s sleep. This strain delivers its sleepy, relaxing effects with sharp aromas of wood and fresh pine.  ',
          strain_effects: 'Happy,Relaxed,Euphoric,Sleepy,Tingly',
          strain_flavors: 'Diesel,Pine,Spicy/Herbal'
        },
        {
          strain_id: 61,
          strain_name: 'Als-Dream',
          strain_type: 'hybrid',
          strain_rating: '3',
          strain_description: 'Al’s Dream is rapidly becoming a Colorado cannabis staple. This cross of Albert Walker and Blue Dream yields a unique connoisseur-grade flower with notes of celery seed and pungent earth that opens up with notes of citrus after combustion. Offering consumers a heady euphoria that lends itself to creative tasks, it also has medicinal benefits that curb the effects of depression, nausea, and stress. Al’s Dream is also known to have mild psychedelic effects when its THC content passes 20%.  ',
          strain_effects: 'Talkative,Energetic',
          strain_flavors: 'None'
        },
        {
          strain_id: 62,
          strain_name: 'Alaska',
          strain_type: 'sativa',
          strain_rating: '4.6',
          strain_description: 'Alaska, developed by Tikun Olam, is an Israeli strain comprised of 70% sativa genetics. With uplifting effects intended for daytime consumption, Alaska has been found to successfully treat an array of medical symptoms including inflammation, pain, nausea, insomnia, and gastrointestinal disorders. ',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Focused,Happy',
          strain_flavors: 'Earthy,Woody,Pine'
        },
        {
          strain_id: 63,
          strain_name: 'Alaska-Thunder-Grape',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'From Sonoma County comes Alaska Thunder Grape, a hybrid strain that balances genetics from Matanuska Thunder Fuck and Grape Ape. With floral flavors of lavender and hibiscus, Alaska Thunder Grape delivers heavy euphoric effects that promote rest and relaxation.',
          strain_effects: 'Tingly,Uplifted,Creative,Euphoric,Focused',
          strain_flavors: 'Pepper,Strawberry,Grape'
        },
        {
          strain_id: 64,
          strain_name: 'Alaskan-Ice',
          strain_type: 'sativa',
          strain_rating: '4.4',
          strain_description: 'Alaskan Ice by Green House Seeds is a powerful sativa that crosses a euphoric White Widow hybrid with the energizing buzz of Haze. Frostlike resin blankets the buds in a promise of soaring psychoactivity, anchored only by its moderate CBD content. The intensity of this 70% sativa strain is recommended for evening consumption and unproductive weekends. Alaskan Ice is a slight variant of Moby Dick, but poses a greater challenge to growers; cultivators with the expertise to raise Alaskan Ice will be rewarded with a highly potent harvest of sour, spicy buds following a 9 week flowering period. The high resin content of Alaskan Ice has made this strain a favorite among hash producers and patients with severe symptoms.',
          strain_effects: 'Euphoric,Uplifted,Happy,Relaxed,Energetic',
          strain_flavors: 'Sweet,Earthy,Spicy/Herbal'
        },
        {
          strain_id: 65,
          strain_name: 'Alaskan-Thunder-Fuck',
          strain_type: 'sativa',
          strain_rating: '4.4',
          strain_description: 'Alaskan Thunder Fuck (also referred to as ATF, Matanuska Thunder Fuck or Matanuska Tundra) is a legendary sativa-dominant strain originating in the Matanuska Valley area of Alaska.  According to the legend, it was originally a Northern California sativa crossed with a Russian ruderalis, but sometime in the late 70s it was crossed with Afghani genetics to make it heartier.  ATF usually presents large, beautifully frosted buds with incredibly strong odors of pine, lemon, menthol, and skunk.  Known for possessing a relaxing yet intensely euphoric high, it is also described as having a “creeper” effect as well as pronounced appetite enhancement.',
          strain_effects: 'Happy,Euphoric,Relaxed,Uplifted,Energetic',
          strain_flavors: 'Earthy,Woody,Pine'
        },
        {
          strain_id: 66,
          strain_name: 'Albert-Walker',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Albert Walker is an indica-dominant hybrid with unknown origins, but is thought to have descended from Afghan Skunk and bred in the Pacific Northwest. Evidence of its lineage is found in its sour lemon and skunky smell and heavy full-body effects that can last for several hours. Albert Walker’s euphoric and relaxing qualities make it a go-to strain for patients treating depression and anxiety, and may also have benefits for chronic pain and appetite loss. This clone-only strain may come as a challenge for some growers as the plants tend to require frequent attention and maintenance. However, the high yields following its 8-week flowering cycle could be considered a satisfactory reward.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Hungry',
          strain_flavors: 'Earthy,Mango,Blueberry'
        },
        {
          strain_id: 67,
          strain_name: 'Alchemy',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Alchemy is a 50/50 hybrid cannabis strain that was conjured by combining Chemdawg and Querkle. This creation from TGA Genetics comes wreathed in purple fan leaves and lavender-tipped buds. With an aroma of sour grapes and earthy musk, Alchemy delivers a balance of relaxing body effects and engaged cerebral invigoration. Boasting high levels of THC, Alchemy is sure to restore both your mood and appetite.',
          strain_effects: 'Relaxed,Sleepy,Uplifted,Hungry,Tingly',
          strain_flavors: 'Cheese,Sweet,Spicy/Herbal'
        },
        {
          strain_id: 68,
          strain_name: 'Alf',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'The indica-dominant hybrid Alf was created by crossing Animal Pie (an Animal Cookies and Cherry Pie hybrid) and Black Raven (White Fire Alien OG x ’09 Cookies) from The Captain’s Connection. With dessert-like notes of cookies and sour cherry, Alf’s aroma is as enticing as its purple crystal-coated buds. Patients seeking relief from pain, spasms, nausea, and appetite may want to give this relaxing hybrid a try.',
          strain_effects: 'Relaxed,Creative,Euphoric,Giggly,Happy',
          strain_flavors: 'Diesel,Tropical,Pungent'
        },
        {
          strain_id: 69,
          strain_name: 'Alice-In-Wonderland',
          strain_type: 'sativa',
          strain_rating: '4.5',
          strain_description: 'Alice in Wonderland is a mostly sativa strain with euphoric cerebral effects. It provides an elevated sensory experience, making it a favorite strain for creative pastimes, outdoor activities, a laid-back weekend, or daytime stress relief. Said to be a descendant of Willy’s Wonder, Alice in Wonderland has many therapeutic qualities, especially for those suffering from anxiety or depression.',
          strain_effects: 'Focused,Euphoric,Happy,Uplifted,Relaxed',
          strain_flavors: 'Pine,Mint,Sweet'
        },
        {
          strain_id: 70,
          strain_name: 'Alien-Abduction',
          strain_type: 'hybrid',
          strain_rating: '3.8',
          strain_description: 'Alien Abduction is an OG Kush hybrid bred by So-Cal medical collective Ocean Grown Genetics, who crossed an Alien OG male with the Ether cut of Alien Dawg. These seeds have been highly sought after by growers, as they are known to have great germination rates and multiple excellent phenotypes, all of which are robust and vigorous plants. Most phenotypes exhibit typical OG Kush smells and flavors, and pack a high-THC punch that combines a potent head buzz with a strongly sedating body high. For many patients, Alien Abduction is a great appetite stimulant and sleep aid.',
          strain_effects: 'Happy,Relaxed,Focused,Uplifted,Creative',
          strain_flavors: 'Earthy,Nutty,Sweet'
        },
        {
          strain_id: 71,
          strain_name: 'Alien-Apparition',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'Alien Apparition is a cleverly named cross from Franchise Genetics. This spectral anomaly is brought to the material sphere with the help of a Ghost/Natural Born Killer hybrid and Alien Technology. Known for its happy, relaxing qualities, Alien Apparition combines the OG Kush-like elements of Ghost OG and Alien Technology’s euphoric sedation to create a potent hybrid best suited to afternoon consumption. Enjoy this strain to enhance mood and subdue general aches and pains.   ',
          strain_effects: 'Hungry,Energetic,Euphoric,Aroused,Tingly',
          strain_flavors: 'Sweet,Pungent,Skunk'
        },
        {
          strain_id: 72,
          strain_name: 'Alien-Asshat',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Alien Asshat is a hybrid cannabis strain grown by Sky High Gardens in Washington. With a staggeringly high THC content, Alien Asshat launches you into the cosmos with a powerful euphoric blast. Its buds are a tangle of green calyxes and leaves wrapped in a constellation of shining crystal resin. If you’re new to cannabis, be sure to start small with this heavy-hitter.',
          strain_effects: 'Euphoric,Creative,Giggly,Relaxed,Happy',
          strain_flavors: 'Pungent,Citrus,Earthy'
        },
        {
          strain_id: 73,
          strain_name: 'Alien-Bubba',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Alien Bubba is the intergalactic cross of the renowned Bubba Kush and the heady space invader, Alien Kush. This two-fold Kush blend offers mellow sedation with a mental aura most would describe as introspective or meditative. Its bouquet is earthy and floral, and when combusted, Alien Bubba shows off a pungent tea and herbaceous grassiness that is smooth on the exhale. Enjoy this heady heavy-hitter close to the end of the day to maximize its sedative effects.   ',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Happy,Uplifted',
          strain_flavors: 'Earthy,Woody,Sweet'
        },
        {
          strain_id: 74,
          strain_name: 'Alien-Dawg',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Descending from Northern California and Afghanistan genetics, Alien Dawg is a cross between Chemdawg and Alien Technology with a THC content of up to 20%. With a sour and pungent odor, Alien Dawg has a light, bitter taste and presents brilliant mind and body effects.',
          strain_effects: 'Relaxed,Sleepy,Happy,Euphoric,Uplifted',
          strain_flavors: 'Earthy,Pungent,Woody'
        },
        {
          strain_id: 75,
          strain_name: 'Alien-Dutchess',
          strain_type: 'sativa',
          strain_rating: '4.2',
          strain_description: 'Alien Dutchess by Cresco Labs brings together strong euphoria and deep relaxation to create a strain that is as potent as it is refined. Created by crossing Dutch Treat Haze and Alien OG, this strain exhibits a spicy, herbaceous aroma with hints of pine and lemon. The earthy and citrus notes shine through upon consumption. Alien Dutchess has been known to stimulate appetite and help abate nausea, headaches, and stress.',
          strain_effects: 'Euphoric,Relaxed,Uplifted,Focused,Happy',
          strain_flavors: 'Sweet,Berry,Blueberry'
        },
        {
          strain_id: 76,
          strain_name: 'Alien-Hallucination',
          strain_type: 'hybrid',
          strain_rating: '4.1',
          strain_description: 'Alien Hallucination is a hybrid cannabis strain that is believed to be a cross between the sedating Tahoe Alien and LSD, a classic Amsterdam hybrid known for its trippy head buzz. Bred by Alien Genetics, this strain will abduct the mind while your body remains anchored in deep physical relaxation.',
          strain_effects: 'Happy,Relaxed,Giggly,Aroused,Hungry',
          strain_flavors: 'Sweet,Earthy,Diesel'
        },
        {
          strain_id: 77,
          strain_name: 'Alien-Inferno',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Using a White Fire #6 and Alien OG hybrid and crossing it again with Diablo, LivWell created Alien Inferno. Rock solid buds slathered in trichomes and red pistils, Alien Inferno is a heavy-handed OG hybrid that can help relieve pain, boost creativity, and help you unwind. With the taste of earth, pine, and lemon, this potent indica-dominant hybrid will take care of even the most experienced connoisseur.',
          strain_effects: 'Happy,Talkative,Euphoric,Uplifted,Energetic',
          strain_flavors: 'Pine,Diesel,Earthy'
        },
        {
          strain_id: 78,
          strain_name: 'Alien-Kush',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Alien Kush is a potent cross of LVPK and Alien Dawg that originally hails from California, not deep space. It may have you feeling a little spacey, though, as this mostly indica hybrid touches down in the brain first, giving active, sometimes-psychedelic effects that are more traditionally sativa. The active buzz settles over time into a relaxing body buzz that will dissolve both stress and pain. Alien Kush plants have average yields, but they are hardy, easy-to-grow plants, indoors or out. The light green buds have a covering of red or orange hairs and should be airy. This strain has a piney smell, but the taste is a subtle spiciness that is reminiscent of tea.',
          strain_effects: 'Relaxed,Euphoric,Happy,Tingly,Uplifted',
          strain_flavors: 'Earthy,Woody,Flowery'
        },
        {
          strain_id: 79,
          strain_name: 'Alien-Og',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'First available as a clone in California’s Bay Area and now in seed form from Cali Connection, Alien OG is a cross of Tahoe OG and Alien Kush. One of the most potent strains available today, this indica-dominant hybrid has tested as high as 28% THC. Alien OG has the typical lemon-pine “OG” smell and flavor, and an intense high that combines heavy indica body effects and a psychedelic cerebral buzz. Beginners and novices, be sure to take it slow with this heavy-hitter.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Creative',
          strain_flavors: 'Earthy,Lemon,Citrus'
        },
        {
          strain_id: 80,
          strain_name: 'Alien-Reunion',
          strain_type: 'hybrid',
          strain_rating: '4.9',
          strain_description: 'Alien Reunion is an indica-dominant cross of Alien OG and Alien Dawg bred by Cannobi Genetics. Its dense colas emit a pungent mix of flavors that include sweet fruity tones of cherry and lemon combined with a skunky, diesel note. The relaxing effects of Alien Reunion calm the body while stimulating the mind with an energetic and creative rush that helps you stay productive without feeling sluggish.',
          strain_effects: 'Euphoric,Uplifted,Happy,Relaxed,Talkative',
          strain_flavors: 'Pungent,Skunk,Cheese'
        },
        {
          strain_id: 81,
          strain_name: 'Alien-Rift',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Alien Rift by Ocean Grown Seeds is the thoroughly enhanced phenotype of Alien Abduction specifically backcrossed for better hash production. With a tart scent of lemon and spice and buds dense with trichomes, Alien Rift is certain to please the senses. This strain is the product of crossing Alien Abduction, Alien Dawg (\'Ether\' cut), and Alien OG. With that much extraterrestrial activity, you know this indica is out of this world! Use Alien Rift’s laidback effects to curb stress and moderate physical pain. ',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Hungry',
          strain_flavors: 'Grape,Earthy,Chemical'
        },
        {
          strain_id: 82,
          strain_name: 'Alien-Rock-Candy',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Alien Rock Candy by Alien Genetics is an indica-dominant hybrid with an aroma as sweet as the name suggests. This Sour Dubble and Tahoe Alien cross captures a fruity, citrus aroma that carries through until the exhale. Full relaxation of the mind and body make this strain ideal for the end of an active or stressful day, with a heaviness that segueways nicely into sleep. The effects may take a few minutes to peak, but Alien Rock Candy packs a powerful euphoric punch once it sets in. A good choice for both novice and expert growers alike, Alien Rock Candy finishes around 8 weeks into its flowering cycle. ',
          strain_effects: 'Relaxed,Happy,Euphoric,Sleepy,Tingly',
          strain_flavors: 'Sweet,Citrus,Earthy'
        },
        {
          strain_id: 83,
          strain_name: 'Alien-Sour-Apple',
          strain_type: 'hybrid',
          strain_rating: '4.6',
          strain_description: 'Alien Sour Apple is a sativa-dominant hybrid that mixes the genetics of Alien Dawg with Sour Apple. Bred by Franchise Genetics, Alien Sour Apple tastes sweet and sour, like a Granny Smith apple. Its heady sativa effects provide a lift of energy and incite an optimistic sense of euphoria.',
          strain_effects: 'Euphoric,Relaxed,Uplifted,Creative,Happy',
          strain_flavors: 'Sweet,Lemon,Apple'
        },
        {
          strain_id: 84,
          strain_name: 'Alien-Stardawg',
          strain_type: 'sativa',
          strain_rating: '4.4',
          strain_description: 'Alien Stardawg is a sativa-dominant hybrid cross of Alien Kush and Stardawg bred by Green Beanz Seeds. Stretchy plants produce large yields of frosty green, red, blue, and purple colored buds with pleasing cherry hash and chem-fuel flavors and a potent well-rounded high.  ',
          strain_effects: 'Uplifted,Happy,Euphoric,Creative,Tingly',
          strain_flavors: 'Diesel,Spicy/Herbal,Sage'
        },
        {
          strain_id: 85,
          strain_name: 'Alien-Technology',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Very little is known about Alien Technology other than it is a landrace strain selected from a handful of seeds acquired by breeder OBSoul33t from a US soldier returning from Afghanistan. It is a pure indica that features light green buds, incredible trichome production, and a spicy, hashy flavor/aroma with fuel undertones. Reports indicate that the high is more stimulating than your typical indica, while lasting as long as 6 hours. Alien Technology has been used in breeding some of today’s most potent hybrids such as Alien Dawg and Alien Kush.',
          strain_effects: 'Happy,Relaxed,Uplifted,Euphoric,Focused',
          strain_flavors: 'Earthy,Spicy/Herbal,Woody'
        },
        {
          strain_id: 86,
          strain_name: 'Aliens-On-Moonshine',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Aliens On Moonshine by Sin City Seeds is a potent CBD-rich phenotype of The Cali Connection’s Sour Alien crossed with White Moonshine. This indica-dominant strain emits a funky aroma that is a clashing of sour, sweet, and chemicals. The 5:1 CBD/THC ratio gives Aliens On Moonshine potent medicinal properties while remaining mostly functional. Its effects land firmly in the body and can assist with inflammation, irritability, and minor physical discomfort. The uplifting, clearheaded buzz and soothing physical effects make Aliens On Moonshine an excellent add-in or standalone strain for CBD lovers everywhere.    ',
          strain_effects: 'Relaxed,Happy,Talkative,Uplifted,Giggly',
          strain_flavors: 'Citrus,Sage,Grapefruit'
        },
        {
          strain_id: 87,
          strain_name: 'Allen-Iverson-Og',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Allen Iverson OG is a heavy indica strain grown exclusively by California’s Good as Gold. Designed for consumers with a stubbornly high tolerance to THC, this potent indica delivers a powerfully euphoric experience that tranquilizes the body while launching your mind to the cosmos. Sweet pine and wood flavors intermix with aromas of sour fuel, offering a complex profile for consumers who cherish flavor as much as potency. ',
          strain_effects: 'Uplifted,Euphoric,Happy,Relaxed',
          strain_flavors: 'None'
        },
        {
          strain_id: 88,
          strain_name: 'Allen-Wrench',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'A popular strain for sativa-lovers, Allen Wrench presents the best qualities of its parents, Trainwreck and NYC Diesel with crisp flavors of sour fruit. Its aroma has been characterized as sour and flowery, leaving a lingering scent of fruit. Allen Wrench is known to provide users with a long-lasting cerebral high and fill an entire room with its strong essence. The buds have a dark-green color and dark foliage with orange pistils growing out. Allen Wrench also has a 10-11 week flowering time and medium to medium-high THC content.',
          strain_effects: 'Happy,Uplifted,Focused,Energetic,Hungry',
          strain_flavors: 'Citrus,Earthy,Pungent'
        },
        {
          strain_id: 89,
          strain_name: 'Allkush',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Allkush, 2nd prize winner at the 2005 Highlife Cannabis Cup, is a hashy Kush blend bred by Paradise Seeds of Amsterdam. This resinous flower hails from the “Hippie Trail” that winds through Pakistan and Afghanistan, creating a 75/25 indica-dominant strain that soothes without binding the consumer to the couch. With traditional uplifting cerebral elements and a pleasant sedation on the body, Allkush shines on patients seeking relief from sleep disorders, anxiety, and depression. ',
          strain_effects: 'Relaxed,Sleepy,Uplifted,Happy',
          strain_flavors: 'Spicy/Herbal,Honey,Earthy'
        },
        {
          strain_id: 90,
          strain_name: 'Aloha',
          strain_type: 'sativa',
          strain_rating: '4.2',
          strain_description: 'Aloha is a sativa strain that leaves users with an upbeat, energetic buzz and may also be helpful in treating pain such as migraines. Aloha’s flowers will be large and fluffy, with plenty of room for white wispy hairs and sparkling crystals. The aroma of this strain is that of grass and citrus for a fresh experience that may have you thinking of your next island getaway. Its sativa effects can be a little much for some users, so those who are looking for less mental stimulation should be warned.',
          strain_effects: 'Energetic,Uplifted,Happy,Creative,Focused',
          strain_flavors: 'Tropical,Sweet,Citrus'
        },
        {
          strain_id: 91,
          strain_name: 'Aloha-Grape-Stomper',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Aloha Grape Stomper is a delicious cross of Gage Green’s Grape Stomper and \'98 Aloha White Widow. This hybrid was bred to amplify the strain’s generous trichome production and its potent grape-fuel aroma. It grows vigorously and tends to offer consumers clear-headed effects alongside an airy physical sensation.',
          strain_effects: 'Tingly,Uplifted,Euphoric,Giggly,Happy',
          strain_flavors: 'Blueberry,Grape,Tropical'
        },
        {
          strain_id: 92,
          strain_name: 'Aloha-Limone',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'The smell of Aloha Limone has been described as, “a fruit tree rotting in the Kona sun.” Citrus notes are native to this Hawaiian Sunrise and Nina Limone cross, but the plant also expresses latent floral and pungent elements from recessive Kush genetics. Plan on cheeky euphoria and a physical lightness that encourages outdoor activity. Aloha Limone is a proprietary genetic cross of Colorado Seed Inc.  ',
          strain_effects: 'Euphoric,Creative,Energetic,Talkative,Uplifted',
          strain_flavors: 'Sweet,Citrus,Earthy'
        },
        {
          strain_id: 93,
          strain_name: 'Alohaberry',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Originating from the tropical islands of Hawaii, Alohaberry releases a pleasant aroma and taste of tropical berries. It is known for its unique sweet taste and because it is an equal hybrid, the effects are both mind and body. Flowering time for this plant is approximately 8-9 weeks.',
          strain_effects: 'Energetic,Uplifted,Aroused,Tingly,Relaxed',
          strain_flavors: 'Berry,Apple,Chestnut'
        },
        {
          strain_id: 94,
          strain_name: 'Alpha-Blue',
          strain_type: 'sativa',
          strain_rating: '4.5',
          strain_description: 'Alpha Blue, also known as Dream Diesel (or DD), is a high-flying sativa that combines Blue Dream and NYC Diesel. In 2011 this compelling blend claimed two 2nd place prizes for a sativa at the High Times’ Medical Cup in Denver and San Francisco. Its buds are glazed with sugary trichomes and take on hues of deep red and violet. The aroma is a combination of tart blueberry and sour candy that create a pungent mixture of earthy berry and Haze upon exhale. The sweet fragrance of Alpha Blue brings with it uplifting effects that produce a calming, relaxed mood without putting you to sleep. The cerebral and happy buzz is a great tool when coping with stress and anxiety.',
          strain_effects: 'Energetic,Happy,Euphoric,Relaxed,Talkative',
          strain_flavors: 'Earthy,Blueberry,Sweet'
        },
        {
          strain_id: 95,
          strain_name: 'Alpha-Cow',
          strain_type: 'sativa',
          strain_rating: '5',
          strain_description: 'Alpha Cow is a sativa strain that brings together genetics from Alpha Blue and Purple Cow. Its aroma is a distinctive mix of overripe blueberries and sweet toffee, while the exhale accentuates its smooth berry flavors. Some sativas tend to bring on racing thoughts, but this strain provides a calming buzz with mellow cerebral sensations that keep you feeling uplifted and positive.',
          strain_effects: 'None',
          strain_flavors: 'None'
        },
        {
          strain_id: 96,
          strain_name: 'Alpha-Express',
          strain_type: 'sativa',
          strain_rating: '4.7',
          strain_description: 'Alpha Express is an introspective sativa strain that descends from Alpha Blue and Ghost Train Haze. With a complex flavor that spans sour juniper and musky cedar notes, Alpha Express delivers spacey cerebral effects perfect for meditative or creative activities. Its buds bloom with trichome-covered calyxes that carry a red tint as the flowers mature.',
          strain_effects: 'Energetic,Focused,Talkative,Happy,Relaxed',
          strain_flavors: 'Diesel,Earthy,Spicy/Herbal'
        },
        {
          strain_id: 97,
          strain_name: 'Alpha-Og',
          strain_type: 'hybrid',
          strain_rating: '4.6',
          strain_description: 'Alpha OG from Alpha Medic is an OG Kush phenotype that took 2nd place in the 2014 Los Angeles Cannabis Cup. Its thick layer of crystal trichomes helps to explain why this pungent, pine-scented strain consistently tests over 20% THC when grown optimally. Conditions best treated with high-THC strains like Alpha OG include sleep apnea, appetite and weight loss, nausea, and chronic pain. ',
          strain_effects: 'Relaxed,Focused,Happy,Euphoric,Sleepy',
          strain_flavors: 'Spicy/Herbal,Sweet,Berry'
        },
        {
          strain_id: 98,
          strain_name: 'Alpine-Blue',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Alpine Blue is a 60/40 sativa-dominant hybrid that combines Blue Mystic and Power Plant, who pass on uplifting euphoric effects alongside a complex aroma of blueberry and woody pine. While some phenotypes tend toward the indica side of the spectrum, even its common sativa expression induces calming full-body effects. Patients typically look to Alpine Blue for daytime relief of anxiety and mood disorders, gastrointestinal pain, and inflammation.',
          strain_effects: 'Uplifted,Creative,Energetic,Aroused,Euphoric',
          strain_flavors: 'Berry,Blueberry,Pine'
        },
        {
          strain_id: 99,
          strain_name: 'Alpine-Star',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Alpine Star, often labeled as Alpine OG, is an earthy, citrus mix of Tahoe OG and Sensi Star genetics. Zesty lemon flavors lead Alpine Star’s wave of relaxing indica effects. The pain relieving properties of Alpine Star radiate from the head and neck, calming anxieties and muscle tension as the effects descend to the lower extremities.',
          strain_effects: 'Relaxed,Uplifted,Happy,Euphoric,Tingly',
          strain_flavors: 'Pine,Citrus,Earthy'
        },
        {
          strain_id: 100,
          strain_name: 'Ambrosia',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Stemming from her parents, God Bud and Burmese, the Ambrosia strain is a high that will hit you almost instantaneously and will be felt throughout your body. Her mother, Burmese is a sativa from the Mighty Mite Seed Company and was voted #1 People\'s Choice at the Cannabis Culture Toker\'s Bowl in 2002. For dad, God Bud from Jordan of the Islands, is a mostly indica plant, popular for it\'s tropical sweet flavor. Ambrosia produces a large amount of dense and sticky buds with yellow leaves and orange hairs. ',
          strain_effects: 'Uplifted,Euphoric,Relaxed,Creative,Focused',
          strain_flavors: 'Flowery,Lavender,Earthy'
        },
        {
          strain_id: 101,
          strain_name: 'American-Dream',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'American Dream by Sensi Seeds is an indica-dominant strain that blends Afghan Skunk with Jamaican and Hawaiian genetics. Its name is charged with meaning, mainly in that this indica represents “honest toil, personal improvement, and enjoying the fruits of one’s labor,” as Sensi Seeds puts it. Earthy and skunky in flavor, American Dream helps you pursue happiness with balanced uplifting, social effects appropriate for day or evening use. ',
          strain_effects: 'Focused,Euphoric,Tingly,Energetic,Relaxed',
          strain_flavors: 'Earthy,Sweet,Pungent'
        },
        {
          strain_id: 102,
          strain_name: 'American-Kush',
          strain_type: 'indica',
          strain_rating: '4.8',
          strain_description: 'American Kush, by Alphakronik Genes (AKG), is a 70/30 indica-dominant combination of Pre-98 Bubba Kush and Sin City Kush. It is a robust strain with large bulbous colas that deliver the profound, relaxing body effects that have made Kush strains so popular. With a smooth palate of flavors ranging from fresh lemon to spicy notes of lavender and coffee, American Kush is a delightful answer to muscle spasms, chronic pain, and nausea.',
          strain_effects: 'Relaxed,Tingly,Sleepy,Uplifted,Happy',
          strain_flavors: 'Sweet,Lemon,Lime'
        },
        {
          strain_id: 103,
          strain_name: 'Americano',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Americano is a Canadian strain released by Enterprise Seeds. It is a Northern Lights/Skunk hybrid that is named for the American consumers it was designed to attract. When tourists, notably Americans, came to Vancouver looking to purchase bulk cannabis, they wanted their buds to have “bag appeal,” or stunning visual characteristics that made it easy to sell. Americano is known for its heavy coat of trichromes and its thick dense colas. The flavors and aromas of Americano stay true to its Skunk lineage and produce a sweet, piney musk. The effects are exactly what you would expect from an indica-driven hybrid: fast-acting, relaxing, and sleepy. Americano is a solid answer to symptoms of insomnia, headaches, and chronic pain.',
          strain_effects: 'Relaxed,Creative,Focused,Euphoric,Aroused',
          strain_flavors: 'Earthy,Spicy/Herbal,Tobacco'
        },
        {
          strain_id: 104,
          strain_name: 'Amethyst',
          strain_type: 'hybrid',
          strain_rating: '3.9',
          strain_description: 'Amethyst is a hybrid cannabis strain from the gardens of Zion Botanicals, who crossed parent strains Sage N Sour and Granddaddy Purple. This high-THC 50/50 hybrid provides a clear and focused buzz that sharpens the senses, making this a perfect pair for creative activities, enjoying nature, or productive afternoons. The inhale brings with it sweet and sour flavors ranging from spicy berry to tangy grape.',
          strain_effects: 'Energetic,Creative,Giggly,Hungry,Happy',
          strain_flavors: ''
        },
        {
          strain_id: 105,
          strain_name: 'Amethyst-Bud',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Amethyst Bud is a hybrid cannabis strain bred by Soma Seeds. This strain is a cross between Lavender and Afghani Hawaiian with a deep purple color.  Amethyster Bud has a strong and pungent aroma with a round, floral notes on the palate. This strain provides consumers with a pleasant and relaxing high.',
          strain_effects: 'Uplifted,Happy,Relaxed,Focused,Energetic',
          strain_flavors: 'Berry,Lavender,Sweet'
        },
        {
          strain_id: 106,
          strain_name: 'Amnesia',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'Amnesia is typically a sativa-dominant cannabis strain with some variation between breeders. Skunk, Cinderella 99, and Jack Herer are some of Amnesia’s genetic forerunners, passing on uplifting, creative, and euphoric effects ideal for treating mood disorders. Growers should expect a 9-10 week flowering period with moderate yields. This strain normally has a high THC and low CBD profile and produces intense psychotropic effects that new consumers should be wary of. ',
          strain_effects: 'Happy,Euphoric,Energetic,Creative,Uplifted',
          strain_flavors: 'Earthy,Sweet,Skunk'
        }
    ]);
    });
};
