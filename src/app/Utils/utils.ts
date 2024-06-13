import { heros } from "@/lib/hero"

export const getHero = (heroid : string) =>{
    const hero = heros.find((item)=>item.heroid == heroid);
    return hero || null;
}