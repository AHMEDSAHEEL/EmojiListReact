
import { useState } from 'react'


function App() {

  const emojiData = [
    { id: 1, Symbol: "😃", text: "smiling face", quote: "Smile brings happiness" },
    { id: 2, Symbol: "😓", text: "sad face", quote: "Tears are words that need to be written" },
    { id: 3, Symbol: "😎", text: "swag", quote: "Confidence is not 'They will like me'. Confidence is 'I'll be fine if they don't'" },
    { id: 4, Symbol: "😡", text: "Angry", quote: "Anger gives nothing but destroys your character" },
    { id: 5, Symbol: "😭", text: "crying face", quote: "Crying is a way your eyes speak when your mouth can’t explain how broken your heart is" },
    { id: 6, Symbol: "😴", text: "sleepy face", quote: "Sleep is the best meditation" },
    { id: 7, Symbol: "😂", text: "laughing face", quote: "Laughter is the best medicine" },
    { id: 8, Symbol: "😍", text: "heart eyes", quote: "Love is composed of a single soul inhabiting two bodies" },
    { id: 9, Symbol: "😔", text: "pensive face", quote: "Silence speaks when words can't" },
    { id: 10, Symbol: "🤔", text: "thinking face", quote: "The unexamined life is not worth living" },
    { id: 11, Symbol: "🤗", text: "hugging face", quote: "A hug is worth a thousand words" },
    { id: 12, Symbol: "😇", text: "angel face", quote: "Be an angel to someone else whenever you can" },
    { id: 13, Symbol: "🥳", text: "partying face", quote: "Celebrate every tiny victory" },
    { id: 14, Symbol: "😷", text: "face with medical mask", quote: "Health is the greatest gift" },
    { id: 15, Symbol: "😅", text: "grinning face with sweat", quote: "Success is the sum of small efforts repeated day in and day out" },
    { id: 16, Symbol: "👨‍⚕️", text: "male doctor", quote: "Wherever the art of medicine is loved, there is also a love of humanity" },
    { id: 17, Symbol: "👩‍⚕️", text: "female doctor", quote: "The art of medicine consists of amusing the patient while nature cures the disease" },
    { id: 18, Symbol: "👨‍🎓", text: "male student", quote: "Education is not the filling of a pail, but the lighting of a fire" },
    { id: 19, Symbol: "👩‍🎓", text: "female student", quote: "The beautiful thing about learning is that no one can take it away from you" },
    { id: 20, Symbol: "👨‍🍳", text: "male cook", quote: "Cooking is love made visible" },
    { id: 21, Symbol: "👩‍🍳", text: "female cook", quote: "The only time to eat diet food is while you're waiting for the steak to cook" }
  ];


  const [search, setSearch] = useState("");

  const filterSearch = emojiData.filter((emoji) =>

    (emoji.text.toLowerCase()).includes(search.toLowerCase())

  );



  return (
    <div className='app'>
      <header>
        <h1>Emoji Finder</h1>
        <input type='text'
          placeholder='Enter Emoji Name:'
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}

        />
        <div className='emoji'>

          {search && filterSearch.map((item) => (

            <p key={item.id}>{item.Symbol} (<a className='se'>{item.text}</a>) - {item.quote}</p>)

          )

          }


        </div>
      </header>
    </div>
  );
}

export default App;
