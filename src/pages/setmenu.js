import React from "react"
import Layout from "../components/layout/setMenu"
export default function setMenu() {
  return (
    <div>
      <Layout>
        <main id="main" className="main">
          <header>
            <nav
              style={{
                width: "100vw",
                height: "80px",
                backgroundColor: "#333",
              }}
            >
              <a href="./#groups" alt="" title="">
                back
              </a>
            </nav>
          </header>
          <h2>Entree</h2>
          <p>
            Roasted cauliflower, shawarma spices, almonds, currants, sage brown
            butter
          </p>
          <p>
            Seared scallops, caviar lentils, speck, tarragon and lettuce Roasted
            figs,
          </p>
          <p>
            stracciatella, pistachio, bulgur, balsamic South Australian mussels,
            chilli, tomato, chargrilled sourdough
          </p>
          <p>
            {" "}
            Spanish mackerel tataki, corn, cherry tomato, nori crisp, anchoïade{" "}
          </p>
          <p>Crispy pork belly, boudin noir, parsnip, apple, celery, jus</p>
          <p>Hand cut steak tartare, wild mushrooms, yolk, potato gaufrette</p>
          <h2>Main</h2>
          <p>
            Gold band Snapper, eggplant, roasted capsicum, okra, basil caper
            salsa{" "}
          </p>
          <p>
            Charred eggplant, crispy furikake rice, green tea dashi, shimeji
          </p>
          <p>
            {" "}
            Squid ink pasta, spanner crab, semi-dried tomato, chilli, saffron
          </p>
          <p> Fish pie, leeks, truffle oil</p>
          <p>
            Lamb rump, pistachio salsa verde, chargrilled onion, pumpkin, jus{" "}
          </p>
          <p>Chargrilled flat iron steak, parsnip, watercress, mushroom</p>
          <h2>Sides</h2>
          <p>Pomme puree, crisp herb potatoes 9.5 </p>
          <p>Wild greens, chilli, confit garlic, pepitas 12 </p>
          <p>Beetroot, radicchio, pear &amp; walnuts, merlot vinaigrette 12 </p>
          <p>Shaved cabbage, red apple, hazelnut, chives 12 </p>
          <p>Roasted carrots, baby onions, pistachio,sunflower sprouts 12</p>
          <h2>Dessert</h2>
          <p>
            Kaffir lime meringue, pineapple ginger sorbet, passion fruit, Thai
            basil Pain d’epice{" "}
          </p>
          <p>creme brûlée, rhubarb, strawberry sorbet</p>
          <p>
            {" "}
            Hazelnut chocolate fondant, salted butterscotch &amp; vanilla gelato
          </p>
          <p>Affogato, vanilla gelato, frangelico Sorbet or gelato </p>
          <p>Cheese plate, brown sugar oatcakes, fresh apple</p>
        </main>
      </Layout>
    </div>
  )
}
