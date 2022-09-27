import { locations } from './locations'

import type {ArchiveDoc} from '../types/ArchiveDoc'

import butler129Src from "../assets/images/butler-129-covering-letter.jpg";
import butler133Src from "../assets/images/butler-133-butler-to-navy.jpg";
import butler91Src from "../assets/images/butler-91-orders.jpg";
import marinesSrc from "../assets/images/marines-marching-to-station.jpg";
import ussDolphinSrc from "../assets/images/uss-dolphin-1915.jpg";
import locZevonSrc from "../assets/images/loc-zevon.jpg";

export const documents: Array<ArchiveDoc> = [
    {
        id: 'butler129', src: butler129Src, location: locations.washington,
        date: new Date('1916-02-29T00:00:00-04:00'),
        description: 'In 1916 Smedley Butler was awarded the Congressional Medal of Honor for his actions at Veracruz on 22 April 1914.',
        srcUrl: 'https://catalog.archives.gov/id/57279637',
        citation: 'Col. John A. Lejeune to Maj. Smedley D. Butler, 4 Feb. 1916. Official Military Personnel File for Smedley D. Butler, image 129 of 2814; Official Military Personnel Files, 1905-1998; Records of the US Marine Corps, 1775-, Record Group 127. National Archives and Records Administration.'
    },
    {
        id: 'butler133', src: butler133Src, location: locations.portAuPrince,
        date: new Date('1916-02-04T00:00:00-04:00'),
        description: 'Butler, then stationed at Port-au-Prince, Haiti, wrote to the Secretary of the Navy, attempting to decline the Medal of Honor, writing: “the undersigned feels that no service rendered by him at Vera Cruz, deserves such recognition.”',
        srcUrl: 'https://catalog.archives.gov/id/57279637',
        citation: 'Maj. Smedley D. Butler to Secretary of the Navy, 23 Feb. 1916. Official Military Personnel File for Smedley D. Butler, image 133 of 2814; Official Military Personnel Files, 1905-1998; Records of the US Marine Corps, 1775-, Record Group 127. National Archives and Records Administration.'
    },
    {
        id: 'butler91', src: butler91Src, location: locations.colon,
        date: new Date('1914-01-08T00:00:00-04:00'),
        description: 'In January 1914 Maj. Smedley Butler and his battalion of Marines received orders to leave Panama and report to Rear Admiral Fletcher at Veracruz.',
        srcUrl: 'https://catalog.archives.gov/id/57279637',
        citation: 'Orders for Maj. Smedley D. Butler to depart Panama for Veracruz, Mexico, 8 Jan. 1914. Official Military Personnel File for Smedley D. Butler, image 91 of 2814; Official Military Personnel Files, 1905-1998; Records of the US Marine Corps, 1775-, Record Group 127. National Archives and Records Administration.'
    },
    {
        id: 'marines', src: marinesSrc, location: locations.veracruz,
        date: new Date('1914-05-16T00:00:00-04:00'),
        description: 'US Marines and Army troops continued to occupy the city until late November 1914.',
        srcUrl: 'https://www.loc.gov/item/2010651723/',
        citation: 'Marines Marching to Station - Mexican War. 16 May 1914. Photograph. Retrieved from the Library of Congress.'
    },
    {
        id: 'ussDolphin', src: ussDolphinSrc, location: locations.tampico,
        date: new Date('1914-04-09T00:00:00-04:00'),
        description: 'In April 1914, sailors from the gunboat USS _Dolphin_ were detained by Mexican soldiers. Though the sailors were quickly released and the officer who had ordered their detention arrested, escalating US demands for symbolic reparations and their subsequent refusal by the Huerta government led to President Wilson asking the US Congress for permission to occupy Veracruz and remove Huerta from power.',
        srcUrl: 'https://www.loc.gov/item/2004673121/',
        citation: 'U.S.S. DOLPHIN, 1913-1921: Starboard side view, at pier, Aug. 1915. Photograph. Retrieved from the Library of Congress.'
    },
    {
        id: 'locZevon', src: locZevonSrc, location: locations.losAngeles,
        date: new Date('1978-01-08T00:00:00-08:00'),
        description: 'In 1977 Warren Zevon and Jorge Calderón recorded the song “Veracruz”, a ballad dramatizing the US occupation. It was released on the album _Excitable Boy_, which also included “Roland the Headless Thompson Gunner” and “Lawyers, Guns, and Money”, satirical takes on Cold War adventurism in Africa and Latin America, respectively.',
        srcUrl: 'https://lccn.loc.gov/99568272',
        citation: 'Library of Congress. Catalog record for Zevon, Warren, Excitable Boy. LC Catalog, 1978.'
    }
]
