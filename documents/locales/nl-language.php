<?php

//Dutch messages for PhpDig
//by Lecompte Pieter (pieter.lecompte@pandora.be)

//'keyword' => 'translation'
$phpdig_mess = array (
'mode'          =>'mode',
'query'         =>'query',
'list_meanings' =>'� Total - lists the total number of searches for each query
� Query - lists the various keywords for each search query
� Mode - lists the "and, exact, or" search mode per query
� Links - lists the average number of links found per query
� Time - lists the most recent GMT timestamp of each query',
'with_no_results' =>'with no results',
'with_results' =>'with results',
'searches'     =>'searches',
'page'         =>'Page',
'of'           =>'of',
'to'           =>'to',
'listing'      =>'Listing',
'viewList'     =>'View List of Queries',
'one_per_line' =>'Enter one link per line',

'StopSpider'   =>'Stop spider',
'id'           =>'ID',
'url'          =>'URL',
'days'         =>'Days',
'links'        =>'Links',
'depth'        =>'Depth',
'viewRSS'      =>'View RSS for this Page',
'powered_by'   =>'Powered by PhpDig',
'searchall'    =>'Search All',
'wait'         =>'Wait... ',
'done'         =>'Done!',
'limit'        =>'Limit',
'manage'       =>'Here you can manage:',
'dayscron'     =>'- the number of <b>days</b> crontab waits to reindex (0 = ignore)',
'links_mean'   =>'- the max number of <b>links</b> per depth per site (0 = unlimited)',
'depth_mean'   =>'- the max search <b>depth</b> per site (0 = none, depth trumps links)',
'max_found'    =>'Maximum links found is ((links * depth) + 1) when links is greater than zero.',
'default_vals' =>'Default values',
'use_vals_from' =>'Use values from',
'table_present' =>'table if present and use<br/>default values if values absent from table?',
'admin_msg_1'   =>'- To empty tempspider table click delete button <i>without</i> selecting a site',
'admin_msg_2'   =>'- Search depth of zero tries to crawl just that page regardless of links per',
'admin_msg_3'   =>'- Set links per depth to the max number of links to check at each depth',
'admin_msg_4'   =>'- Links per depth of zero means to check for all links at each seach depth',
'admin_msg_5'   =>'- Clean dashes removes \'-\' index pages from blue arrow listings of pages',
'admin_panel'   =>'Admin Panel',

'choose_temp'  =>'Choose a template',
'select_site'  =>'Select a site to search',
'restart'      =>'Restart',
'narrow_path'  =>'Narrow Path to Search',
'upd_sites'    =>'Update sites',
'upd2'         =>'Update Done',
'links_per'    =>'Links per',
'yes'          =>'ja',
'no'           =>'nee',
'delete'       =>'wissen',
'reindex'      =>'herindexeren',
'back'         =>'Terug',
'files'        =>'bestanden',
'admin'        =>'Administratie',
'warning'      =>'Waarschuwing !',
'index_uri'    =>'Welke URI wilt u indexeren ?',
'spider_depth' =>'Zoek diepte',
'spider_warn'  =>'Zorg ervoor dat niemand anders op het zelfde ogenblik de site aan het updaten is. Een vergrendeling zal in een later versie voorzien worden.',
'site_update'  =>'Een site updaten',
'clean'        =>'Wis',
't_index'      =>'index',
't_dic'        =>'woordenboek',
't_stopw'      =>'veel voorkomende woorden',
't_dash'       =>'dashes',

'update'       =>'Update',
'exclude'      =>'Wissen en uitsluiten van een tak',
'excludes'     =>'Uit te sluiten paden',
'tree_found'   =>'Gevonden boomstructuur',
'update_mess'  =>'Herindexeer of wis een boomstructuur',
'update_warn'  =>'Uitsluiten zal alle geindexeerde woorden wissen',
'update_help'  =>'Klik op het kruis om de boomstructuur te wissen
Klik op het groen vinkje om te updaten
Klik op het verbodsteken om nooit meer te indexeren',
'branch_start' =>'Selecteer de map links om open te vouwen',
'branch_help1' =>'Selecteer de dokumenten om manueel te updaten',
'branch_help2' =>'Klik op het kruis om een dokument te wissen
Klik op de groene vink om te herindexeren',
'redepth'      =>'level diepte',
'branch_warn'  =>'Wissen is permanent',
'to_admin'     =>'naar administratie',
'to_update'    =>'naar update',

'search'       =>'Zoeken',
'results'      =>'Resultaten',
'display'      =>'Toon',
'w_begin'      =>'beginnen met',
'w_whole'      =>'Identiek',
'w_part'       =>'deel van een woord',
'alt_try'      =>'Did you mean',

'limit_to'     =>'Beperkt tot',
'this_path'    =>'enkel deze URL',
'total'        =>'in totaal',
'seconds'      =>'seconden',
'w_common_sing'     =>'zijn veel voorkomend en worden genegeerd',
'w_short_sing'      =>'zijn te korte woorden, worden genegeerd',
'w_common_plur'     =>'zijn veel voorkomend en worden genegeerd',
'w_short_plur'      =>'zijn te korte woorden, worden genegeerd',
's_results'    =>'Zoek resulaten',
'previous'     =>'Vorige',
'next'         =>'Volgende',
'on'           =>'op query',

'id_start'     =>'Site indexering',
'id_end'       =>'Indexeren kompleet !',
'id_recent'    =>'Is recent geindexeerd',
'num_words'    =>'Aantal woorden',
'time'         =>'tijd',
'error'        =>'Fout',
'no_spider'    =>'Spider niet opgestart',
'no_site'      =>'Geen zulke site in de database',
'no_temp'      =>'Geen link in tijdelijke tabel',
'no_toindex'   =>'Geen inhoud geindexeerd',
'double'       =>'Dubbel van een bestaand dokument',

'spidering'    =>'Bezig met spideren...',
'links_more'   =>'meer nieuwe links',
'level'        =>'levels',
'links_found'  =>'gevonden links',
'define_ex'    =>'Definieer uitsluitingen',
'index_all'    =>'indexeer alles',

'end'          =>'einde',
'no_query'     =>'Vul de zoek waarde in',
'pwait'        =>'Even geduld aub...',
'statistics'   =>'Statistieken',

// INSTALL
'slogan'   =>'De kleinste zoek machine in het heelal : versie',
'installation'   =>'Installatie',
'instructions' =>'Typ hier een MySQL parameter. Geef een bestaande gebruiker op die een database kan beheren.',
'hostname'   =>'Hostnaam  :',
'port'   =>'Poort (geen = default) :',
'sock'   =>'Sock (geen = default) :',
'user'   =>'Gebruiker :',
'password'   =>'Paswoord :',
'phpdigdatabase'   =>'PhpDig database :',
'tablesprefix'   =>'Tabel prefix :',
'instructions2'   =>'* optioneel. Gebruik kleine letters, 16 letters max.',
'installdatabase'   =>'Installeer phpdig database',
'error1'   =>'Kan geen connectie template vinden. ',
'error2'   =>'Kan niet schrijven naar de connectie template. ',
'error3'   =>'Kan init_db.sql niet vinden. ',
'error4'   =>'Kan geen tabellen aanmaken. ',
'error5'   =>'Kan niet alle configuratie bestanden vinden. ',
'error6'   =>'Kan  geen databse maken, <BR />kijk uw gebruikers rechten na. ',
'error7'   =>'Kan geen verbindeng maken met database<br />Controleer uw connectie. ',
'createdb' =>'Maak database',
'createtables' =>'Maak enkel tabellen',
'updatedb' =>'Update bestaande database',
'existingdb' =>'Schrijf enkel connectie parameters weg',
// CLEANUP_ENGINE
'cleaningindex'   =>'Wissen index ...',
'enginenotok'   =>' Geindexeerde referenties vonden een onbestaand sleutelwoord.',
'engineok'   =>'Engine is coherent.',
// CLEANUP_KEYWORDS
'cleaningdictionnary'   =>'Wissen van woordenboek',
'keywordsok'   =>'Alle sleutelwoorden zijn in 1 of meerdere paginas.',
'keywordsnotok'   =>' Sleutelwoorden waren niet in 1 pagina.',
// CLEANUP_COMMON
'cleanupcommon' =>'Wissen veel voorkomende woorden',
'cleanuptotal' =>'Totaal ',
'cleaned' =>' gewist.',
'deletedfor' =>' gewist voor ',
// INDEX ADMIN
'digthis' =>'Indexeer!',
'databasestatus' =>'DataBase status',
'entries' =>' Ingangen ',
'updateform' =>'Update pagina',
'deletesite' =>'Wis site',
// SPIDER
'spiderresults' =>'Spider resultaten',
// STATISTICS
'mostkeywords' =>'Meeste sleutelwoorden',
'richestpages' =>'Rijkste paginas',
'mostterms'    =>'Meest gezochte termen',
'largestresults'=>'Grootste resulaten',
'mostempty'     =>'Meeste nul resultaten',
'lastqueries'   =>'Laatst gezochte queries',
'responsebyhour'=>'Response time by hour',
// UPDATE
'userpasschanged' =>'Gebruiker/Paswoord is veranderd !',
'uri' =>'URI : ',
'change' =>'Verander',
'root' =>'Root',
'pages' =>' paginas',
'locked' => 'Vergrendeld',
'unlock' => 'Ontgrendel site',
'onelock' => 'Een site is vergrendeld omdat men bezig is aan het spideren. U zal moeten wachten',
// PHPDIG_FORM
'go' =>'Start ...',
// SEARCH_FUNCTION
'noresults' =>'Geen resultaten'
);
?>