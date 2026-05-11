import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const LINKS = {
  googleReviews:
    "https://www.google.com/search?sca_esv=7aca6fc7736590bb&rlz=1C1FKPE_enCY1150CY1151&sxsrf=ANbL-n4yLJ1XabtLisYsOQoGkMz8x0ZTPA:1778532850151&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x3yhQFlaVoN8sgjD_kLqzVraaiIvuOEmcpa9yIPwmBIg367MVAK1MSvO7xsiBQC9Tnb5UTShCT_ivARHacII3n82X1I11Y0J9JpfzBVT105ti8Kf-WIulo1GqYqleNfGBnqLXUA%3D&q=TGI+Fridays+Cyprus+-+Larnaca+Finikoudes+Reviews&sa=X&ved=2ahUKEwjruISWj7KUAxXpg_0HHZDWMwsQ0bkNegQIMhAH&biw=1920&bih=945&dpr=1",
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g190379-d953005-Reviews-TGI_Fridays_Larnaca_Finikoudes-Larnaca_Larnaka_District.html",
  menu: "https://fridays.com.cy/menus/food",
  wolt: "https://wolt.com/en/cyp/larnaca/restaurant/tgi-fridays-larnaca",
  foody: "https://www.foody.com.cy/delivery/menu/tgi-fridays",
  bolt: "https://food.bolt.eu/en/443-larnaca/p/10053-tgi-fridays-finikoudes/",
  reserve: "https://eatapp.co/en/reserve/tgi-fridays-finikoudes-f734cc",
  rewards: "https://fridays.com.cy/rewards",
  careers: "https://fridays.com.cy/careers",
  tel: "tel:+35724816666",
  email: "mailto:a.malai@fridays.com.cy",
}

function App() {
  const [showDelivery, setShowDelivery] = useState(false)

  return (
    <div className="min-h-screen bg-black text-slate-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* cinematic gradient bloom */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.45),transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.4),transparent_55%)]"
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </motion.div>

      <motion.div
        className="relative w-full max-w-sm rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl p-6 flex flex-col items-center gap-5 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* avatar */}
        <motion.div
          className="h-20 w-20 rounded-3xl bg-[conic-gradient(from_160deg,_#ec4899,_#a855f7,_#22d3ee,_#ec4899)] shadow-lg shadow-fuchsia-500/60"
          initial={{ scale: 0.4, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 150, damping: 16 }}
        />

        {/* name + role */}
        <motion.div
          className="text-center space-y-1"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.35 }}
        >
          <h1 className="text-[1.35rem] font-semibold tracking-tight">
            Andrei Malai
          </h1>
          <p className="text-xs text-slate-300">Restaurant Manager</p>
        </motion.div>

        {/* hero row: rewards + reserve */}
        <motion.div
          className="grid grid-cols-2 gap-3 w-full mt-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.35 }}
        >
          {/* Rewards hero */}
          <motion.a
            href={LINKS.rewards}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="col-span-1 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-fuchsia-400 to-amber-300 text-black px-3 py-3 flex flex-col justify-between shadow-[0_18px_40px_rgba(236,72,153,0.6)]"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-black/75">
              Rewards
            </span>
            <div className="text-sm font-semibold leading-snug">
              Fridays Rewards
              <span className="block text-[10px] font-normal text-black/80">
                Earn up to €120+ in value
              </span>
            </div>
          </motion.a>

          {/* Reserve hero */}
          <motion.a
            href={LINKS.reserve}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="col-span-1 rounded-2xl bg-white/8 border border-white/20 px-3 py-3 flex flex-col justify-between"
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-fuchsia-200/80">
              Visit
            </span>
            <div className="text-sm font-medium leading-snug">
              Reserve table
              <span className="block text-[10px] text-slate-200/80">
                Lock in your next visit
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* reviews row */}
        <motion.div
          className="grid grid-cols-2 gap-3 w-full mt-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.3 }}
        >
          {/* Google reviews */}
          <motion.a
            href={LINKS.googleReviews}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-2xl bg-white/8 border border-emerald-400/40 px-3 py-3 flex flex-col justify-between shadow-sm shadow-emerald-500/25"
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-200/90">
              Review
            </span>
            <div className="text-sm font-medium leading-snug">
              Google
              <span className="block text-[10px] text-emerald-100/80">
                Opens review page
              </span>
            </div>
          </motion.a>

          {/* TripAdvisor */}
          <motion.a
            href={LINKS.tripadvisor}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-2xl bg-white/8 border border-emerald-400/25 px-3 py-3 flex flex-col justify-between"
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-200/80">
              Review
            </span>
            <div className="text-sm font-medium leading-snug">
              TripAdvisor
              <span className="block text-[10px] text-emerald-100/70">
                Share your visit
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* menu + delivery row */}
        <motion.div
          className="grid grid-cols-2 gap-3 w-full mt-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          {/* Menu */}
          <motion.a
            href={LINKS.menu}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-2xl bg-white/8 border border-white/20 px-3 py-3 flex flex-col justify-between"
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-sky-200/90">
              Menu
            </span>
            <div className="text-sm font-medium leading-snug">
              Dine‑in
              <span className="block text-[10px] text-slate-200/80">
                Restaurant menu
              </span>
            </div>
          </motion.a>

          {/* Delivery */}
          <motion.button
            type="button"
            onClick={() => setShowDelivery((v) => !v)}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-2xl bg-white/8 border border-sky-400/40 px-3 py-3 flex flex-col justify-between text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-sky-200/90">
              Delivery
            </span>
            <div className="text-sm font-medium leading-snug">
              Foody · Wolt · Bolt
              <span className="block text-[10px] text-slate-200/80">
                Menus can differ from dine‑in
              </span>
            </div>
          </motion.button>
        </motion.div>

        {/* Delivery dropdown */}
        <AnimatePresence>
          {showDelivery && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.22 }}
              className="w-full mt-2 space-y-2 text-sm"
            >
              <p className="text-[10px] text-slate-300 text-center">
                Delivery selection and availability may differ from the
                restaurant menu.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={LINKS.wolt}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/8 border border-sky-400/40 px-4 py-2 text-center text-xs hover:bg-white/15 transition"
                >
                  Wolt
                </a>
                <a
                  href={LINKS.foody}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/8 border border-sky-400/25 px-4 py-2 text-center text-xs hover:bg-white/15 transition"
                >
                  Foody
                </a>
                <a
                  href={LINKS.bolt}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/8 border border-sky-400/25 px-4 py-2 text-center text-xs hover:bg-white/15 transition"
                >
                  Bolt Food
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* compact utility chips */}
        <motion.div
          className="w-full mt-3 flex flex-wrap justify-center gap-2 text-[11px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.3 }}
        >
          <a
            href={LINKS.careers}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 rounded-full bg-white/6 border border-white/15 hover:bg-white/15 transition"
          >
            Work with us
          </a>
          <a
            href={LINKS.tel}
            className="px-3 py-1 rounded-full bg-white/6 border border-white/15 hover:bg-white/15 transition"
          >
            Call
          </a>
          <a
            href={LINKS.email}
            className="px-3 py-1 rounded-full bg-white/6 border border-white/15 hover:bg-white/15 transition"
          >
            Email
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App