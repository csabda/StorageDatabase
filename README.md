## Funkcionális és nem funkcionális követelmények - Pintér Kristóf Balázs (GEGST8)

## Feledat leírás:

	Egy rakár kezelő alkalmazás fejlesztése, mely pontosan egy raktár készletét tarta nyílván.
	Megfelelő hozzáférési jogosultsággal a raktár készletéhez hozzáadhatunk törölhetünk, 
	lekérdezhetjük egy termékből mennyi van  és hogy hol található.

## Funkcionális követelmények:
	
	Bejelentkezés:
		Alkalmazott:
			csak olyan alkalmazott jelentkezhet be és dolgozhat a raktár kezelő programmal
			aki szerepel az "ALKALMAZOTTAK" adatbázis táblában, melynek kezeléséhez adminisztrátori
			jog kell
		
		Adminisztrátor:
			MInden műveletet elvégezhet amelyet egy alkalmazott képes. Ezeken felül az admnisztrátor
			hozzáadhat alkalmazottat az adatbázishoz, illetve törölhet onnan alkalmazottat.
			Továbbá az adminisztrátornak van joga a beállításokat végezni (PL: ratár maximális kapacitása)
			
	Beállítások:
		Csak az adminisztrátornak van joga ezt a funkciót elérni, mely tartalmazza az alábbiakat:
			- Raktár maximális kapacitása
			- Alkalmazott felvétele
			- Alkalmazott törlése
			- Alkalmazott adatok módosítása
	
	Új készlet elhelyezése:
		Új készletet felvételre kerül a raktár adatbázisába paraméterek szerint melyek az alábbiak
			- egység méret (térbeli kiterjedése)
			- darabszám
			- név
			- egyéni ID
		Ha nem sikerül mindet elhelyezni akkor visszaajda az el nem helyezhető termékek számát
		Alkalmazottak és Adminisztrátorok egyaránt használhatják ezta funkciót.
		
	Készlet csökkentése:
		Az új készlet elhelyezésénél felsorolt paraméterek alpaján csökkenti a készletet
		Hibát dob ha a menyiség meghaladja a raktáron lévő mennyiséget.
		Alkalmazottak és Adminisztrátorok egyaránt használhatják ezta funkciót.

##Nem funkcionális követelmények:

	Használhatóság: 
		Egyszerű, átlátható GUI minden felhasználó számára. Ne legyen szükséges dokumentációt
		átolcasni a használathoz azaz önmagyarázó legyen
	
	Teljesítmény: 
		Mivel minden raktár helység önálló adatbázissal rendelkezik és a raktáerak
		mérete is igen csak véges, továbbá optimalizált SQL lekérdezések biztosítják 
		az alkalmazás gyors futását
		
	Rendelkezésre állás:
		Az adatbázis tároló szervert a Giantsoft üzemelteti, akik biztosítják azt hogy 
		a szervereik egy éveben 99.9% ban rendelkezésre állnak.

	Skálázhatóság:
		Álltalában egy raktárhoz egy program és adatbázis tartozik. Ha a felhasználó 
		egy szerver gépen akrja tárolni több raktára adatát egyeztessen a Giantsoft
		munkatársaival milyen konfigurációt érdemes bérelnie
		
	Biztonság: 
		Bármilyen funkció eléréséhez szükséges a bejelentkezés, továbbá minden kötelezően
		kitöltendő mezőben ellenőrizzük	az adatokat még mielőtt azok tovább küldésre kerülnének.
		További biztonsági intézkedés hogy adatokat egyedül az adminisztrátor módosíthat 
		alkalmazottaknál, illetve csak ők vehetnek fel újabb alkalmazottat, 
		továbbá egyedül ők férnek hozzá a beállíátsokhoz
		
	Karbantarthatóság: 
		Az alkalmazás megvalósítása az MVC modellt fogja követni így moduláris lesz a rendszer
		Könnyen hozzáadhatunk újabb modulokat a különböző rétegekhez vagy módosíthajtuk őket
