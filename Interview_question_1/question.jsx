// Assalomu alaykum. Bu file imizda ReactJS dan tushishi mumkin bo'lgan ayrim savollar va javoblar toplami mavjud.

// 1-savol: ReactJS - nima ?
// User interfase ini qurish uchun ishlatiladigan single page applcation va Open source JavaScript library hisoblanadi.

// ================================

// 2-savol: JSX - nima ?
// Kengaytmasi( JavaScript XML ). JavaScript dod ( . ) CreateElement ning sintaksis shugasi hisoblanadi.

// ================================

// 3-savol: Virtual DOM nima? U qanday ishlaydi ?
// Virtual DOM - Real DOM ning memory sida joylashgan bo'lib u UI componentini copy sini o'zining memorysida saqlab turadi.
// Virtual DOM  State o'zgarganda oldingi UI componenti bilan yangilangan UI componentini taqqoslaydi.
// Taqqoslaganda UI ning aynan qayeri o'zgargan bo'lsa ekranda ham shu qismining o'zini yangilab beradi. Bunda reconciliation jarayoni vujudga keladi.

// ================================

// 4-savol: reconciliation jarayoni - nima ?
// Render method ining chaqirilishi va ekranga ma'lumot chiqish oralig'i tushinilari. Bu jarayon Virtual DOM ishlashida vujudga keladi.

// ================================

// 5-savol: Unidirectional Data Flow - deganda nimani tushinasiz ?
// Yuqoridan pastga yo'nalgan oqim, ya'ni   Parent dan child ga prop jo'natilish holatida child ning yangilanish jarayonidir.
// Bu child ning aynan qaysi biri o'garishidagi eng tez amalga oshadigan harakatdi.

// ================================

// 6-savol: Real case larda ternary operator( ?,: ) ishlatgan afzalmi yoki OR ( || ) operator nimi ?
// ternary operator ishlatgan afzal. Chunki OR operatorining Reac da turli kamchiliklari mavjud.

// ================================

// 7-savol: Nima uchun class selection i react da className ga o'zgargan ?
// ReactJS code lari jsx formatdan js formatga convert bo'layotganda javascript dagi class bilan chalkashib qolishi mumkin va code da conflict yuzaga keladi.

// ================================

// 8-savol: JSX code larni qanday o'qiydi ?
// jsx formatdagi code lar  ReactJS ning Bable kutubxonasi orqali js formatga compile bo'ladi.

// ================================

// 9-savol: Browser qanday ishlaydi ?
// Brinchi bo'lib browser ga ' html ' file ni ma'lumotlari chiqadi,  keyin ' assets ' file ni , keyin ' css ' file ni, keyin ' js ' file ma'lumotlari yuklanadi.
// ReactJS esa barcha code larni js formatga compile bo'ladi. Keyn js formatdagi ma'lumotlr browserga yuboriladi.
// Manashu tartibda browser ma'lumotlarni ekranga chiqaradi.

// ================================

// 9-savol: Server Side Rendering nima ? Qanday afzalligi bor ?
// html dagi barcha ma'lumotlar Backend ga jo'natiladi va qolgan ma'lumotlar yuklangunga qadar html ma'lumotlari ekranda ko'rinib bo'ladi.
// Afzalligi projectning optimazation qismini tezlashtiradi.

// ================================

// 10-savol: State va prop farqi nima ?
// Ikkisi ham object va componentni re-render qiladi. Farqi ' prop ' bir componentdan ikkinchi componentga ma'lumot jo'natish uchun ishlatilsa,
// State esa componentdagi biror bir ma'lumotning qiymatni o'zgartiradi.

// ================================

// 11-savol: Prop drilling nima ?
// Parent dan child ga, child dan sapchild ga, sapchild dan grandchild ga prop uzatilishiga aytiladi.
// Bu sintaksis juda yomon, chunki prop uzatilganda barcha drilling bo'lgan componentlar re-render bo'ladi.