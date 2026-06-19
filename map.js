//this is the Javascript file used to create the main map showing the locations of the pubs
//code based on https://stackoverflow.com/questions/42968243/how-to-add-multiple-markers-in-leaflet-js

    var locations = [
  ['<a href="directory/towns/Amersham/boot_slipper.html">         Boot and Slipper</a>', 51.680289, -0.608282],
  ['<a href="directory/towns/Amersham/ego_pomeroy.html">          Ego at the Pomeroy</a>', 51.670354, -0.583364],
  ['<a href="directory/towns/Amersham/elephant_castle.html">      Elephant and Castle</a>', 51.667214, -0.619242],
  ['<a href="directory/towns/Amersham/mad_squirrel.html">         Mad Squirrel</a>', 51.678513, -0.605012],  
 
  ['<a href="directory/towns/Amersham/metro_lounge.html">         Metro Lounge</a>', 51.676569, -0.607349],  
  ['<a href="directory/towns/Amersham/the_chequers_inn.html">     The Chequers Inn</a>', 51.664642, -0.607005],
  ['<a href="directory/towns/Amersham/the_crown_inn.html">        The Crown Inn</a>', 51.680788, -0.661572],
  ['<a href="directory/towns/Amersham/the_eagle.html">            The Eagle</a>', 51.667887, -0.621194],  
 
  ['<a href="directory/towns/Amersham/the_hit_or_miss.html">      The Hit or Miss</a>', 51.652149, -0.666878],
  ['<a href="directory/towns/Amersham/the_metropolitan.html">     The Metropolitan</a>', 51.667783, -0.562188],
  ['<a href="directory/towns/Amersham/the_plough_hyde.html">      The Plough</a>', 51.694164, -0.655250],
  ['<a href="directory/towns/Amersham/the_potters_arms.html">     The Potters Arms</a>', 51.644708, -0.652753],
    
  ['<a href="directory/towns/Amersham/the_saracens_head.html">    The Saracens Head</a>', 51.665123, -0.616943],
  ['<a href="directory/towns/Amersham/the_squirrel.html">         The Squirrel</a>', 51.653599, -0.667084],
  ['<a href="directory/towns/Amersham/the_swan.html">             The Swan</a>', 51.667699, -0.621835],
  ['<a href="directory/towns/Amersham/the_white_lion.html">       The White Lion</a>', 51.669511, -0.576018] ,  
//Aylesbury
  ['<a href="directory/towns/Aylesbury/cotton_wheel.html">        Cotton Wheel</a>', 51.828029, -0.843287] ,
  ['<a href="directory/towns/Aylesbury/craftyard.html">           Craftyard</a>', 51.762317, -0.742757],
  ['<a href="directory/towns/Aylesbury/egg_monkey.html">          Egg and Monkey</a>', 51.816143, -0.813159],
  ['<a href="directory/towns/Aylesbury/emperors_lounge.html">     Emperors Lounge</a>', 51.818198, -0.813168],  

  ['<a href="directory/towns/Aylesbury/horse_jockey.html">        Craftyard</a>', 51.828131, -0.814901],
  ['<a href="directory/towns/Aylesbury/miller_carter.html">       Horse and Jockey</a>', 51.832493, -0.8604025],
  ['<a href="directory/towns/Aylesbury/queens_head.html">         Queens Head</a>', 51.816768, -0.814429],
  ['<a href="directory/towns/Aylesbury/the_akeman_inn.html">      The Akeman Inn</a>', 51.864211, -0.993978], 
 
  ['<a href="directory/towns/Aylesbury/the_aristocrat.html">       The Aristocrat', 51.811054, -0.806527],
  ['<a href="directory/towns/Aylesbury/the_bell_astonclinton.html">The Bell</a>', 51.799481, -0.721152],
  ['<a href="directory/towns/Aylesbury/the_bell_chearsley.html">  The Bell</a>', 51.789264, -0.961159],
  ['<a href="directory/towns/Aylesbury/the_bell_hardwick.html">   The Bell</a>', 51.866139, -0.831852],
 
  ['<a href="directory/towns/Aylesbury/the_bell_sm.html">         The Bell</a>', 51.787998, -0.796753],
  ['<a href="directory/towns/Aylesbury/the_black_boy.html">       The Black Boy</a>', 51.885513, -0.865165],
  ['<a href="directory/towns/Aylesbury/the_bricklayers_arms.html">The Bricklayers Arms</a>', 51.811290, -0.806320],
  ['<a href="directory/towns/Aylesbury/the_broad_leys.html">      The Broad Leys</a>', 51.810014, -0.803858],
 
  ['<a href ="directory/towns/aylesbury/the_bucks_yeoman.html">             The Buckinghamshire Yeoman</a>', 51.806389, -0.783629 ],
  ['<a href ="directory/towns/aylesbury/the_bugle_horn.html">               The Bugle Horn</a>', 51.802395, -0.849378 ],
  ['<a href ="directory/towns/aylesbury/the_bull_sm.html">                  The Bull</a>', 51.785897, -0.790503],
  ['<a href ="directory/towns/aylesbury/the_chandos_oakley.html">           The Chandos Arms</a>', 51.805547, -1.074576 ],
  
  ['<a href ="directory/towns/aylesbury/the_chandos_weston.html">           The Chandos Arms</a>s', 51.789373, -0.764829],
  ['<a href ="directory/towns/aylesbury/the_chequers_inn.html">             The Chequers Inn</a>', 51.787530, -0.757064],
  ['<a href ="directory/towns/aylesbury/the_churchill_arms.html">           The Churchill Arms</a>', 51.772072, -0.994719],
  ['<a href ="directory/towns/aylesbury/the_clifden_arms.html">             The Clifden Arms</a>', 51.768233, -1.075282],
  
  ['<a href ="directory/towns/aylesbury/the_crown_cudd.html">               The Crown</a>', 51.793858, -0.930810],
  ['<a href ="directory/towns/aylesbury/the_dairy_maid.html">               The Dairy Maid</a>', 51.826450, -0.806849],
  ['<a href ="directory/towns/aylesbury/the_dinton_hermit.html">            The Dinton Hermit</a>', 51.778389, -0.873681],
  ['<a href ="directory/towns/aylesbury/the_dog_house.html">                The Dog House Inn</a>', 51.824461, -0.782186],
   
  ['<a href ="directory/towns/aylesbury/the_eight_bells.html">              The Eight Bells</a>', 51.775149, -0.991669 ],
  ['<a href ="directory/towns/aylesbury/the_feathers.html">                 The Feathers</a>', 51.817536, -0.813160 ],
  ['<a href ="directory/towns/aylesbury/the_firecrest.html">                The Firecrest</a>', 51.740507, -0.734190],
  ['<a href ="directory/towns/aylesbury/the_five_bells.html">               The Five Bells</a>', 51.790170, -0.760972],
       
  ['<a href ="directory/towns/aylesbury/the_five_elms.html">                The Five Elms</a>', 51.855607, -0.819611],
  ['<a href ="directory/towns/aylesbury/the_george_dragon_quainton.html">   The George and Dragon</a>', 51.874426, -0.916632],
  ['<a href ="directory/towns/aylesbury/the_george_dragon_wendover.html">   The George and Dragon</a>', 51.763262, -0.741180],
  ['<a href ="directory/towns/aylesbury/the_harrow.html">                   The Harrow</a>', 51.817238, -0.812487],
           
  ['<a href ="directory/towns/aylesbury/the_harrow_bish.html">              The Harrow</a>', 51.787601, -0.838019],
  ['<a href ="directory/towns/aylesbury/the_honey_bee.html">                The Honey Bee</a>', 51.818544, -0.838716],
  ['<a href ="directory/towns/aylesbury/the_hop_pole.html">                 The Hop Pole</a>', 51.822016, -0.820903],
  ['<a href ="directory/towns/aylesbury/the_king_queen.html">               The King and Queen</a>', 51.760458, -0.743476],               
               
  ['<a href ="directory/towns/aylesbury/the_kings_head.html">               The Kings Head</a>', 51.768884, -0.930692 ],  
  ['<a href ="directory/towns/aylesbury/the_new_zealand.html">              The New Zealand</a>', 51.824579, -0.814402 ],  
  ['<a href ="directory/towns/aylesbury/the_oak.html">                      The Oak</a>', 51.804144, -0.727074],  
  ['<a href ="directory/towns/aylesbury/the_old_fisherman.html">            The Old Fisherman</a>', 51.753392, -1.033922],  
           
  ['<a href ="directory/towns/aylesbury/the_old_millwrights.html">          The Old Millwrights</a>', 51.813343, -0.803228],  
  ['<a href ="directory/towns/aylesbury/the_pack_horse.html">               The Pack Horse</a>', 51.763956, -0.739303],      
  ['<a href ="directory/towns/aylesbury/the_partridge.html">                The Partridge</a>', 51.802508, -0.723749],  
  ['<a href ="directory/towns/aylesbury/the_pheasant_brill.html">           The Pheasant</a>', 51.821814, -1.053786],  
  
  ['<a href ="directory/towns/aylesbury/the_plough.html">                   The Plough</a>', 51.815185, -0.789538],  
  ['<a href ="directory/towns/aylesbury/the_rising_sun_hadd.html">          The Rising Sun</a>', 51.773455, -0.929828],  
  ['<a href ="directory/towns/aylesbury/the_rising_sun_ickford.html">       The Rising Sun</a>', 51.763268, -1.060419],  
  ['<a href ="directory/towns/aylesbury/the_rockwood.html">                 The Rockwood</a>', 51.817503, -0.814219],  
  
  ['<a href ="directory/towns/aylesbury/the_rose_crown.html">               The Rose and Crown</a>', 51.804085, -0.854745],  
  ['<a href ="directory/towns/aylesbury/the_russell_arms.html">             The Russell Arms</a>', 51.755902, -0.780461],  
  ['<a href ="directory/towns/aylesbury/the_seven_stars.html">              The Seven Stars</a>', 51.789790, -0.895241],  
  ['<a href ="directory/towns/aylesbury/the_shoulder_mutton.html">          The Shoulder of Mutton</a>', 51.761275, -0.745692],  
  
  ['<a href ="directory/towns/aylesbury/the_watermead_inn.html">            The Watermead Inn</a>', 51.832343, -0.806232],  
  ['<a href ="directory/towns/aylesbury/the_weavers.html">                  The Weavers</a>', 51.820459, -0.805846],  
  ['<a href ="directory/towns/aylesbury/the_white_hart.html">               The White Hart</a>', 51.815429, -0.809831],  
  ['<a href ="directory/towns/aylesbury/the_white_swan.html">               The White Swan</a>', 51.877263, -0.832641],  
  
   ['<a href ="directory/towns/aylesbury/the_woolpack.html">                 The Woolpack</a>', 51.784693, -0.789758],

//Beaconsfield   
   ['<a href ="directory/towns/beaconsfield/bacchus.html">                   Bacchus</a>', 51.612972, -0.646560],
   ['<a href ="directory/towns/beaconsfield/miller_carter.html">             Miller and Carter</a>', 51.599867, -0.670032],
   ['<a href ="directory/towns/beaconsfield/the_beech_house.html">           The Beech House</a>', 51.613078, -0.647939],
   ['<a href ="directory/towns/beaconsfield/the_chiltern.html">              The Chiltern</a>', 51.609884, -0.645271],
   
   ['<a href ="directory/towns/beaconsfield/the_greyhound.html">             The Greyhound</a>', 51.600347, -0.635702],
   ['<a href ="directory/towns/beaconsfield/the_jolly_cricketers.html">      The Jolly Cricketers</a>', 51.618077, -0.605460],
   ['<a href ="directory/towns/beaconsfield/the_lion.html">                  The Lion</a>', 51.622664, -0.654885],
   ['<a href ="directory/towns/beaconsfield/the_old_swan.html">              The Old Swan</a>', 51.602102, -0.6333814],
   
   ['<a href ="directory/towns/beaconsfield/the_royal_saracens_head.html">   The Royal Saracens Head</a>', 51.601601, -0.636166],
   ['<a href ="directory/towns/beaconsfield/the_royal_standard.html">        The Royal Standard</a>', 51.618743, -0.668610],
   ['<a href ="directory/towns/beaconsfield/the_taps.html">                  The Taps</a>', 51.610445, -0.646023],
   ['<a href ="directory/towns/beaconsfield/the_treehouse.html">             The Treehouse</a>', 51.651309, -0.713781],
   
   ['<a href ="directory/towns/beaconsfield/vinny_ted.html">                 Vinny and Ted</a>', 51.601442, -0.637187],
   
    //Buckingham   
   ['<a href ="directory/towns/buckingham/kings_head.html">                  Kings Head</a>', 52.001074, -0.986605],
   ['<a href ="directory/towns/buckingham/prince_wales.html">                Prince of Wales</a>', 51.935969, -0.989370],
   ['<a href ="directory/towns/buckingham/the_blackbird_padbury.html">       The Blackbird</a>', 51.969505, -0.954829],
   ['<a href ="directory/towns/buckingham/the_bull_butcher.html">            The Bull and Butcher</a>', 52.033507, -0.969519],
   
   ['<a href ="directory/towns/buckingham/the_bull_butcher.html">            The Bull and Butcher</a>', 51.931238, -1.035960],
   ['<a href ="directory/towns/buckingham/the_crown_granborough.html">       The Crown</a>', 51.919869, -0.886770],
   ['<a href ="directory/towns/buckingham/the_crown_gawcott.html">           The Crown</a>', 51.980488, -1.008438],
   ['<a href ="directory/towns/buckingham/the_george_winslow.html">          The George</a>', 51.941266, -0.881870],
   
   ['<a href ="directory/towns/buckingham/the_grand_junction.html">          The Grand Junction</a>', 52.001448, -0.9848764],
   ['<a href ="directory/towns/buckingham/the_mitre.html">                   The Mitre</a>', 51.994378, -0.992846],
   ['<a href ="directory/towns/buckingham/the_nags_head.html">               The Nags Head</a>', 51.940941, -0.876986],
   ['<a href ="directory/towns/buckingham/the_new_inn.html">                 The New Inn</a>', 51.997742, -0.985790],
   
   ['<a href ="directory/towns/buckingham/the_old_thatched_inn.html">        The Old Thatched Inn</a>', 51.965451, -0.930107],
   ['<a href ="directory/towns/buckingham/the_pilgrim.html">                 The Pilgrim</a>', 51.898188, -0.875232],
   ['<a href ="directory/towns/buckingham/the_swan.html">                    The Swan</a>', 51.947018, -0.882382],
   ['<a href ="directory/towns/buckingham/the_two_brewers.html">             The Two Brewers</a>', 51.995770, -0.915673],
    
   ['<a href ="directory/towns/buckingham/the_wheatsheaf.html">              The Wheatsheaf</a>', 52.013972, -0.975294],
   
   
   
   //Chesham
   ['<a href ="directory/towns/chesham/hen_chickens.html">                   Hen and Chickens Inn</a>', 51.709495, -0.585880 ],
   ['<a href ="directory/towns/chesham/mad_squirrel.html">                   Mad Squirrel</a>', 51.703617, -0.613394 ],
   ['<a href ="directory/towns/chesham/the_black_horse_inn.html">            The Black Horse Inn</a>', 51.731603, -0.606276],
   ['<a href ="directory/towns/chesham/the_blue_ball.html">                  The Blue Ball</a>', 51.732818, -0.643945 ],
   
   ['<a href ="directory/towns/chesham/the_crown.html">                      The Crown</a>', 51.707446, -0.569060 ],
   ['<a href ="directory/towns/chesham/the_full_moon.html">                  The Full Moon</a>', 51.753534, -0.646273],
   ['<a href ="directory/towns/chesham/the_generals_arms.html">              The General Arms</a>', 51.706524, -0.611790],
   ['<a href ="directory/towns/chesham/the_jolly_sportsman.html">            The Jolly Sportsman</a>', 51.711324, -0.608397],

   ['<a href ="directory/towns/chesham/the_king_charles.html">               The King Charles</a>', 51.727184, -0.595644],
   ['<a href ="directory/towns/chesham/the_pheasant.html">                   The Pheasant</a>', 51.696216, -0.603481],
   ['<a href ="directory/towns/chesham/the_queens_head.html">                The Queens Head</a>', 51.702583, -0.617367],
   ['<a href ="directory/towns/chesham/the_red_lion.html">                   The Red Lion</a>', 51.672926, -0.525407],
   
   ['<a href ="directory/towns/chesham/the_swan.html">                       The Swan</a>', 51.707460, -0.568993],
   ['<a href ="directory/towns/chesham/the_white_hart.html">                 The White Hart</a>', 51.725044, -0.553793],
   ['<a href ="directory/towns/chesham/trekkers.html">                       Trekkers</a>', 51.704110, -0.613360],
//Great Missenden
   ['<a href ="directory/towns/great_missenden/the_chequers_tree.html">      The Chequers Tree</a>', 51.700003, -0.742106],
   ['<a href ="directory/towns/great_missenden/the_cock_and_rabbit.html">    The Cock and Rabbit</a>', 51.729412, -0.698171],
   ['<a href ="directory/towns/great_missenden/the_cross_keys.html">         The Cross Keys</a>', 51.703683, -0.707427],
   ['<a href ="directory/towns/great_missenden/the_full_moon.html">          The Full Moon</a>', 51.683768, -0.709863],
   
   ['<a href ="directory/towns/great_missenden/the_gate.html">               The Gate</a>', 51.687463, -0.762386],
   ['<a href ="directory/towns/great_missenden/the_george_inn.html">         The George Inn</a>', 51.701916, -0.705646],
   ['<a href ="directory/towns/great_missenden/the_hampden_arms.html">       The Hampden Arms</a>', 51.706211, -0.777342],
   ['<a href ="directory/towns/great_missenden/the_nags_head.html">          The Nags Head</a>', 51.692796, -0.697586],

   ['<a href ="directory/towns/great_missenden/the_polecat_inn.html">        The Polecat Inn</a>', 51.686634, -0.734437],
   
     //High Wycombe  
    ['<a href ="directory/towns/high_wycombe/bird_in_hand.html">              Bird in Hand</a>', 51.634809, -0.764556],
    ['<a href ="directory/towns/high_wycombe/blacksmiths_arms.html">          Blacksmiths Arms</a>', 51.608913, -0.771315],
    ['<a href ="directory/towns/high_wycombe/butlers.html">                   Butlers</a>', 51.631504, -0.752968],
    ['<a href ="directory/towns/high_wycombe/fleur_de_lis.html">              Fleur de Lis</a>', 51.659609, -0.903497],
    
    ['<a href ="directory/towns/high_wycombe/grouse_ale.html">                Grouse and Ale</a>', 51.618619, -0.833207],
    ['<a href ="directory/towns/high_wycombe/heidrun.html">                   Heidrun Bar</a>', 51.628584, -0.751469],
    ['<a href ="directory/towns/high_wycombe/mad_squirrel.html">              Mad Squirrel</a>', 51.629794, -0.751630],
    ['<a href ="directory/towns/high_wycombe/ONeills.html">                   ONeills</a>', 51.628879, -0.751815],
    
    ['<a href ="directory/towns/high_wycombe/spindle_thread.html">            Spindle and Thread</a>', 51.635739, -0.753669],
    ['<a href ="directory/towns/high_wycombe/the_belle_vue.html">             The Bell Vue</a>', 51.628474, -0.740730],
    ['<a href ="directory/towns/high_wycombe/the_black_lion.html">            The Black Lion</a>', 51.670055, -0.785160],
    ['<a href ="directory/towns/high_wycombe/the_boot.html">                  The Boot</a>', 51.676406, -0.852921],
    
    ['<a href ="directory/towns/high_wycombe/the_bricklayers_arms.html">      The Bricklayers Arms</a>', 51.648656, -0.774885],
    ['<a href ="directory/towns/high_wycombe/the_chequers_wheeler.html">      The Chequers Inn</a>', 51.626594, -0.836702],
    ['<a href ="directory/towns/high_wycombe/the_chequers_wooburn.html">      The Chequers Inn</a>', 51.574429, -0.687842],
    ['<a href ="directory/towns/high_wycombe/the_cherry_tree.html">           The Cherry Tree</a>', 51.600971, -0.709074 ],
    
    ['<a href ="directory/towns/high_wycombe/the_crown_hazlemere.html">       The Crown</a>', 51.649466, -0.718384],
    ['<a href ="directory/towns/high_wycombe/the_crown_penn.html">            The Crown</a>', 51.631481, -0.676485 ],
    ['<a href ="directory/towns/high_wycombe/the_crown_radnage.html">         The Crown</a>', 51.663830, -0.867416 ],
    ['<a href ="directory/towns/high_wycombe/the_dashwood.html">              The Dashwood Roadhouse</a>', 51.641569, -0.834473],
    
    ['<a href ="directory/towns/high_wycombe/the_earl_howe.html">             The Earl Howe</a>', 51.664143, -0.693080],
    ['<a href ="directory/towns/high_wycombe/the_falcon.html">                The Falcon</a>', 51.629183, -0.751289 ],
    ['<a href ="directory/towns/high_wycombe/the_falcon_wooburn.html">        The Falcon</a>', 51.599755, -0.684095],
    ['<a href ="directory/towns/high_wycombe/the_flint_cottage.html">         The Flint Cottage</a>', 51.629828, -0.747194],
    
    ['<a href ="directory/towns/high_wycombe/the_fox_ibstone.html">           The Fox</a>', 51.639319, -0.916159],
    ['<a href ="directory/towns/high_wycombe/the_general_havelock.html">      The General Havelock</a>', 51.614777, -0.716952],
    ['<a href ="directory/towns/high_wycombe/the_golden_cross.html">          The Golden Cross</a>', 51.675004, -0.823435],
    ['<a href ="directory/towns/high_wycombe/the_green_dragon.html">          The Green Dragon</a>', 51.594529, -0.701470],
    
    ['<a href ="directory/towns/high_wycombe/the_harrow.html">                The Harrow</a>', 51.670137, -0.756380],
    ['<a href ="directory/towns/high_wycombe/the_horse_jockey.html">          The Horse and Jockey</a>', 51.635590, -0.697567],
    ['<a href ="directory/towns/high_wycombe/the_hour_glass.html">            The Hour Glass</a>', 51.632923, -0.784704],
    ['<a href ="directory/towns/high_wycombe/the_king_george.html">           The King George V</a>', 51.616101, -0.712633],
    
    ['<a href ="directory/towns/high_wycombe/the_le_de_spencers.html">        The Le De Spencers Arms</a>', 51.655113, -0.773970],
    ['<a href ="directory/towns/high_wycombe/the_mayflower.html">             The Mayflower</a>', 51.648168, -0.700215],
    ['<a href ="directory/towns/high_wycombe/the_old_bell.html">              The Old Bell</a>', 51.580958, -0.689861],
    ['<a href ="directory/towns/high_wycombe/the_old_oak.html">               The Old Oak</a>', 51.666771, -0.695491],
    
    ['<a href ="directory/towns/high_wycombe/the_old_queens_head.html">       The Old Queens Head</a>', 51.635142, -0.695226],
    ['<a href ="directory/towns/high_wycombe/the_papermill.html">             The Papermill</a>', 51.608078, -0.694550],
    ['<a href ="directory/towns/high_wycombe/the_red_lion_penn.html">         The Red Lion</a>', 51.634879, -0.690234],
    ['<a href ="directory/towns/high_wycombe/the_red_lion_wooburn.html">      The Red Lion</a>', 51.588110, -0.683961],
    
    ['<a href ="directory/towns/high_wycombe/the_rose_crown.html">            The Rose and Crown</a>', 51.630480, -0.757670],
    ['<a href ="directory/towns/high_wycombe/the_royal_standard.html">        The Royal Standard</a>', 51.580303, -0.670056 ],
    ['<a href ="directory/towns/high_wycombe/the_squirrel.html">              The Squirrel</a>', 51.619890, -0.790672],
    ['<a href ="directory/towns/high_wycombe/the_stag.html">                  The Stag</a>', 51.604655, -0.717338],
    
    ['<a href ="directory/towns/high_wycombe/the_swan_inn.html">              The Swan Inn</a>', 51.644470, -0.803461 ],
    ['<a href ="directory/towns/high_wycombe/the_three_horseshoes.html">      The Three Horseshoes</a>', 51.651267, -0.713789 ],
    ['<a href ="directory/towns/high_wycombe/the_wheel_naphill.html">         The Wheel</a>', 51.665254, -0.775510 ],
    ['<a href ="directory/towns/high_wycombe/three_tuns.html">                Three Tuns</a>', 51.628809, -0.749922 ],
    
    ['<a href ="directory/towns/high_wycombe/yates.html">                     Yates</a>', 51.628809, -0.749922 ],
    
    //Marlow       
 
   ['<a href ="directory/towns/marlow/the_botanist.html">                    The Botanist</a>', 51.571145, -0.778669],
   ['<a href ="directory/towns/marlow/the_britannia.html">                   The Britannia</a>', 51.578986, -0.767058],
   ['<a href ="directory/towns/marlow/the_bull_inn_bisham.html">             The Bull Inn</a>', 51.558213, -0.774547],
   ['<a href ="directory/towns/marlow/the_butchers_tap.html">                The Butchers Tap and Grill</a>', 51.572455, -0.776837],
   
   ['<a href ="directory/towns/marlow/the_chequers.html">                    The Chequers</a>', 51.570425, -0.775118],
   ['<a href ="directory/towns/marlow/the_coach.html">                       The Coach/a>', 51.571630, -0.777114],
   ['<a href ="directory/towns/marlow/the_crooked_billet.html">              The Crooked Billet</a>', 51.597494, -0.725959],
   ['<a href ="directory/towns/marlow/the_duke.html">                        The Duke, Marlow</a>', 51.574379, -0.781993],
   
   ['<a href ="directory/towns/marlow/the_duke_of_clarence.html">            The Duke of Clarence</a>', 51.570575, -0.775712],
   ['<a href ="directory/towns/marlow/the_hand_and_flowers.html">            The Hand and Flowers</a>', 51.569915, -0.783237],
   ['<a href ="directory/towns/marlow/the_kings_head.html">                  The Kings Head</a>', 51.585387, -0.741929],
   ['<a href ="directory/towns/marlow/the_marlow_donkey.html">               The Marlow Donkey</a>', 51.571400, -0.768957],
   
   ['<a href ="directory/towns/marlow/the_oarsman.html">                     The Oarsman</a>', 51.572975, -0.775875],
   ['<a href ="directory/towns/marlow/the_old_brewery.html">                 The Old Brewery</a>', 51.569828, -0.775113],
   ['<a href ="directory/towns/marlow/the_prince_of_wales.html">             The Prince of Wales</a>', 51.570266, -0.771081],
   ['<a href ="directory/towns/marlow/the_queens_head.html">                 The Queens Head</a>', 51.583803, -0.741395],
   
   ['<a href ="directory/towns/marlow/the_ship.html">                        The Ship</a>', 51.571167, -0.777621],
   ['<a href ="directory/towns/marlow/the_two_brewers.html">                 The Two Brewers</a>', 51.568504, -0.771897],
   ['<a href ="directory/towns/marlow/walton_bar_lounge.html">               Walton Bar and Lounge</a>', 51.566992, -0.772232],
   

//Milton Keynes
 
   ['<a href ="directory/towns/milton_keynes/barley_mow.html">               Barley Mow</a>', 52.075886, -0.845282],
   ['<a href ="directory/towns/milton_keynes/be_at_one.html">                Be At One</a>', 52.038001, -0.763593],
   ['<a href ="directory/towns/milton_keynes/blackened_sun.html">            Blackened Sun Brewery Tap Room</a>', 52.049977, -0.803485],
   ['<a href ="directory/towns/milton_keynes/blacksmiths_arms.html">         Blacksmiths Arms</a>', 52.052072, -0.752156],
   
   ['<a href ="directory/towns/milton_keynes/captain_ridley.html">           Captain Ridleys Shooting Party</a>', 51.995676, -0.726364],
   ['<a href ="directory/towns/milton_keynes/cosy_club.html">                Cosy Club</a>', 52.042613, -0.759079],
   ['<a href ="directory/towns/milton_keynes/galleon_old.html">              Galleon Old</a>', 52.064651, -0.826163],
   ['<a href ="directory/towns/milton_keynes/halleys_comet.html">            Halleys Comet</a>', 52.059285, -0.785093],
   
   ['<a href ="directory/towns/milton_keynes/have_i_got.html">               Have I Got Brews For You</a>', 52.055943, -0.851084],
   ['<a href ="directory/towns/milton_keynes/inn_on_lake.html">              Inn on the Lake</a>', 52.007515, -0.720994],
   ['<a href ="directory/towns/milton_keynes/las_iguanas.html">              Las Iguanas</a>', 52.037757, -0.763692],
   ['<a href ="directory/towns/milton_keynes/MK_biergarten.html">            MK Biergarten</a>', 52.064381, -0.805698],
   
   ['<a href ="directory/towns/milton_keynes/prince_george.html">            Prince George</a>', 51.997966, -0.796187],
   ['<a href ="directory/towns/milton_keynes/revolucion_de_cuba.html">       Revolucion de Cuba</a>', 52.043451, -0.748824],
   ['<a href ="directory/towns/milton_keynes/rumble_rooms.html">             Rumble Rooms</a>', 52.043726, -0.749310],
   ['<a href ="directory/towns/milton_keynes/slug_lettuce.html">             Slug and Lettuce</a>', 52.038010, -0.764124],
   
   ['<a href ="directory/towns/milton_keynes/the_anchor.html">               The Anchor</a>', 52.014324, -0.627913],
   ['<a href ="directory/towns/milton_keynes/the_barge.html">                The Barge</a>', 52.044914, -0.727388],
   ['<a href ="directory/towns/milton_keynes/the_beehive.html">              The Beehive</a>', 52.049000, -0.885175],
   ['<a href ="directory/towns/milton_keynes/the_betsey_wynne.html">         The Betsey Wynne</a>', 51.939113, -0.830471],
   
   ['<a href ="directory/towns/milton_keynes/the_bull_butcher.html">         The Bull and Butcher</a>', 51.996683, -0.717083],
   ['<a href ="directory/towns/milton_keynes/the_burnt_oak.html">            The Burnt Oak</a>', 52.013954, -0.781783],
   ['<a href ="directory/towns/milton_keynes/the_chequers.html">             The Chequers</a>', 51.998969, -0.716606],
   ['<a href ="directory/towns/milton_keynes/the_clock_tower.html">          The Clock Tower</a>', 52.001125, -0.767525],
   
   ['<a href ="directory/towns/milton_keynes/the_cock_inn.html">             The Cock Inn</a>', 52.114900, -0.828432],
   ['<a href ="directory/towns/milton_keynes/the_countryman.html">           The Countryman</a>', 52.044609, -0.771564],
   ['<a href ="directory/towns/milton_keynes/the_craufurd_arms.html">        The Craufurd Arms</a>', 52.062415, -0.814523 ],
   ['<a href ="directory/towns/milton_keynes/the_cricketers.html">           The Cricketers</a>', 52.032040, -0.755058],
   
   ['<a href ="directory/towns/milton_keynes/the_crooked_billet.html">       The Crooked Billet</a>', 51.975789, -0.773176],
   ['<a href ="directory/towns/milton_keynes/the_cross_keys.html">           The Cross Keys</a>', 52.041765, -0.726825],
   ['<a href ="directory/towns/milton_keynes/the_crown.html">                The Crown</a>', 52.055802, -0.853999],
   ['<a href ="directory/towns/milton_keynes/the_duke.html">                 The Duke of Wellington</a>', 52.057425, -0.847685],
   
   ['<a href ="directory/towns/milton_keynes/the_eager_poet.html">           The Eager Poet</a>', 52.060704, -0.747430],
   ['<a href ="directory/towns/milton_keynes/the_eagle.html">                The Eagle</a>', 52.032317, -0.740654],
   ['<a href ="directory/towns/milton_keynes/the_eight_belles.html">         The Eight Belles</a>', 51.992757, -0.741577],
   ['<a href ="directory/towns/milton_keynes/the_fox_hounds.html">           The Fox and Hounds</a>', 52.058019, -0.855115],
   
   ['<a href ="directory/towns/milton_keynes/the_giffard_park.html">         The Giffard Park</a>', 52.073542, -0.746437],
   ['<a href ="directory/towns/milton_keynes/the_green_man_lavendon.html">             The Green Man</a>',  52.172767, -0.658767],
   ['<a href ="directory/towns/milton_keynes/the_greyhound.html">            The Greyhound</a>', 52.078138, -0.792030],
   ['<a href ="directory/towns/milton_keynes/the_kensington.html">           The Kensington</a>', 52.036508, -0.797914],
   
   ['<a href ="directory/towns/milton_keynes/the_lion_and_sun.html">         The Lion and Sun Tavern</a>', 52.060725, -0.801028],
   ['<a href ="directory/towns/milton_keynes/the_midsummer_tap.html">        The Midsummer Tap</a>', 52.044263, -0.749806],
   ['<a href ="directory/towns/milton_keynes/the_moon_under_water.html">     The Moon under Water</a>', 52.041808, -0.748891 ],
   ['<a href ="directory/towns/milton_keynes/the_nags_head.html">            The Nags Head</a>', 52.071042, -0.758175],
   
   ['<a href ="directory/towns/milton_keynes/the_navigation_inn.html">       The Navigation Inn</a>', 52.085199, -0.852132],
   ['<a href ="directory/towns/milton_keynes/the_new_inn.html">              The New Inn</a>', 52.063646, -0.788135],
   ['<a href ="directory/towns/milton_keynes/the_new_lowndes.html">          The New Lowndes Arms</a>', 52.000864, -0.827649],
   ['<a href ="directory/towns/milton_keynes/the_new_queen_vic.html">       The New Queen Victoria</a>', 52.062437, -0.810030],
   
   ['<a href ="directory/towns/milton_keynes/the_nut_squirrel.html">         The Nut and Squirrel</a>', 52.003181, -0.793395],
   ['<a href ="directory/towns/milton_keynes/the_old_george.html">           The Old George</a>', 52.056670, -0.852661],
   ['<a href ="directory/towns/milton_keynes/the_old_red_lion.html">         The Old Red Lion</a>', 51.963030, -0.685809 ],
   
   ['<a href ="directory/towns/milton_keynes/the_old_schoolhouse.html">      The Old Schoolhouse</a>', 52.055773, -0.850386 ],
   ['<a href ="directory/towns/milton_keynes/the_old_swan_shenley.html">     The Old Swan Bletchley</a>', 51.992059, -0.753784],
   ['<a href ="directory/towns/milton_keynes/the_old_white_lion.html">       The Old White Lion at Wicken</a>',52.047879, -0.912233 ],
   ['<a href ="directory/towns/milton_keynes/the_peartree_bridge.html">       The Peartree Bridge</a>', 52.028192, -0.730875],
   
   ['<a href ="directory/towns/milton_keynes/the_plough_simpson.html">       The Plough</a>',52.016278, -0.717459 ],
   ['<a href ="directory/towns/milton_keynes/the_prince_albert.html">        The Prince Albert</a>', 52.048238, -0.787920],
   ['<a href ="directory/towns/milton_keynes/the_red_lion_fenny.html">       The Red Lion</a>', 52.000704, -0.714870],
   ['<a href ="directory/towns/milton_keynes/the_royal_oak.html">            The Royal Oak</a>', 52.009391, -0.6472212],
   
   ['<a href ="directory/towns/milton_keynes/the_ship_ashore.html">          The Ship Ashore</a>', 52.063019, -0.731986],
   ['<a href ="directory/towns/milton_keynes/the_shoulder_mutton.html">      The Shoulder of Mutton</a>', 52.046085, -0.849625 ],
   ['<a href ="directory/towns/milton_keynes/the_swan_mk_village.html">      The  Swan Inn</a>', 52.042583, -0.704643],
   ['<a href ="directory/towns/milton_keynes/the_talbot.html">               The Talbot</a>', 52.027180, -0.787167],
   
   ['<a href ="directory/towns/milton_keynes/the_tawny_owl.html">            The Tawny Owl</a>', 52.022049, -0.689038 ],
   ['<a href ="directory/towns/milton_keynes/the_three_horseshoes.html">     The Three Horseshoes</a>', 51.948759, -0.780421],
   ['<a href ="directory/towns/milton_keynes/the_three_locks.html">          The Three Locks</a>', 51.947112, -0.705303],
   ['<a href ="directory/towns/milton_keynes/the_three_trees.html">          The Three Trees</a>', 51.991563, -0.754363 ],
   
   ['<a href ="directory/towns/milton_keynes/the_turing_key.html">           The Turing Key</a>', 51.973831, -0.731143 ],
   ['<a href ="directory/towns/milton_keynes/the_victoria_inn.html">         The Victoria Inn</a>', 52.048723, -0.787904],
   ['<a href ="directory/towns/milton_keynes/the_watts_arms.html">           The Watts Arms</a>', 52.115904, -0.829736],
   ['<a href ="directory/towns/milton_keynes/the_wavendon_arms.html">        The Wavendon Arms</a>',52.027069, -0.668728 ],
   
   ['<a href ="directory/towns/milton_keynes/the_wheatsheaf.html">           The Wheatsheaf</a>', 52.003315, -0.685744],
   ['<a href ="directory/towns/milton_keynes/the_white_horse.html">          The White Horse</a>', 52.056939, -0.853012],
   ['<a href ="directory/towns/milton_keynes/turtle_bay.html">               Turtle Bay</a>', 52.037515, -0.763008],
   ['<a href ="directory/towns/milton_keynes/vaults_bar.html">               Vaults Bar</a>', 52.057308, -0.853460],
   
   ['<a href ="directory/towns/milton_keynes/warbler_wharf.html">            Warbler Wharf</a>', 52.047865, -0.733367 ],
   ['<a href ="directory/towns/milton_keynes/ye_olde_swan.html">            Ye Olde Swan</a>', 52.029228, -0.723639],
   
   //Princes Risborough   
   
   ['<a href ="directory/towns/princes_risborough/dukes_wine_bar.html">      Dukes Wine Bar</a>', 51.725294, -0.832579],
   ['<a href ="directory/towns/princes_risborough/lions_of_bledlow.html">    Lions of Bledlow</a>', 51.711736, -0.877976],
   ['<a href ="directory/towns/princes_risborough/red_lion_longwick.html">   Red Lion</a>', 51.735866, -0.857194],
   ['<a href ="directory/towns/princes_risborough/the_bell.html">            The Bell</a>', 51.722313, -0.831689],
   
   ['<a href ="directory/towns/princes_risborough/the_bird_in_hand.html">    The Bird In Hand</a>', 51.718669, -0.838676],
   ['<a href ="directory/towns/princes_risborough/the_black_horse.html">     The Black Horse</a>', 51.694452, -0.810287],
   ['<a href ="directory/towns/princes_risborough/the_plough_cadsden.html">  The Plough At Cadsden</a>', 51.732884, -0.804757],
   ['<a href ="towns/princes_risborough/the_red_lion_whiteleaf.html">        The Red Lion</a>', 51.731161, -0.814973],
   
   ['<a href ="towns/princes_risborough/the_three_crowns.html">    The Three Crowns</a>', 51.739749, -0.819399],
   ['<a href ="towns/princes_risborough/the_whiteleaf_cross.html"> The Whiteleaf Cross</a>', 51.724087, -0.832609],
   
   
];

var map = L.map('map').setView([51.85363106093171, -0.8361606203319112], 9);
mapLink =
  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18
  }).addTo(map);

for (var i = 0; i < locations.length; i++) {
  circle = new L.circle([locations[i][1], locations[i][2]], {color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 2})
    .bindPopup(locations[i][0])
    .addTo(map);
}

