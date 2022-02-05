import React from 'react';

export default function Meme() {
  return (
    <main>
        <form>
            <div className='row'>
                <div className="col-lg-6 form--input">
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Top Text" />
                </div>
                <div className="col-lg-6 form--input">
                    <input type="password" class="form-control" placeholder="Bottom Text"/>
                </div>
            </div>
            <div className='row'>
                    <button type="submit" className="form--btn text-center">Get a new Image <i class="material-icons glyph-top">face</i></button>
            </div>
        </form>
    </main>
  );
}
