import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import pStyles from '../styles/PokemonBattle.module.css';
import 'animate.css'
import React, { useState } from 'react';
import charizardBack from '../public/pokemon/charizardBack.gif';
import charizardFront from '../public/pokemon/charizardFront.gif';
import magikarpBack from '../public/pokemon/margikarpBack.gif';
import { ProgressBar } from 'react-bootstrap';

const PokemonBattle = ({ }) => {
    const BattlePhases = {
        cassadySendsOutPokemon: 0,
        chooseAction: 1,
        chooseAttack: 2,
        playerAttack: 3,
    }
    const charizard = {
        name: "Charizard",
        currentHealth: 100,
        health: 100,
        image: charizardFront
    }
    const margikarp = {
        name: "Magikarp",
        currentHealth: 100,
        health: 100,
        image: magikarpBack
    }
    const [isBattling, setIsBattling] = useState(false);
    const [battlePhase, setBattlePhase] = useState(BattlePhases.cassadySendsOutPokemon);
    const [playerPokemon, setPlayerPokemone] = useState(margikarp);
    const [cassadyPokemon, setCassadyPokemon] = useState(charizard);

    const promptForBattle = () => {
        return (
            <div className={pStyles.bubbleWrap1}>
                <div className={pStyles.bubbleWrap2} >
                    <div className={pStyles.bubbleLinkWrap}>
                        <a onClick={startBattle} className={pStyles.bubbleLink}>CASSADY wants to battle!
                        </a>
                    </div>
                    <span className={pStyles.textContinue}></span>
                </div>
            </div>

        );
    }

    function getAttackPrompt() {
        setBattlePhase(BattlePhases.playerAttack)
    }

    const renderPokemon = () => {
        return (
            <div className=''>
                <div className='col-12 d-flex justify-content-end'>
                <div className='col-3'>
                        <ProgressBar now={cassadyPokemon.currentHealth/cassadyPokemon.health * 100}/>
                        <span>{cassadyPokemon.currentHealth}/{cassadyPokemon.health}</span>
                    </div>
                <Image
                    className=" col-12"
                    src={cassadyPokemon.image}
                    alt="Charizard sprite animation"
                    width={164}
                    height={174}
                />

                </div>
                <div className="col-12 my-2">
                    <Image
                        className=""
                        src={playerPokemon.image}
                        alt="Charizard sprite animation"
                        width={120}
                        height={96}
                    />
                    <div className='col-3'>
                        <ProgressBar now={playerPokemon.currentHealth/playerPokemon.health * 100}/>
                        <span>{playerPokemon.currentHealth}/{playerPokemon.health}</span>
                    </div>
                </div>
            </div>
        )
    }

    const initBattle = () => {
        console.log("Test " + battlePhase); 
        if (battlePhase == BattlePhases.cassadySendsOutPokemon) {
            return (
                <div className='d-flex flex-wrap'>
                    <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                        <div className={pStyles.bubbleWrap1} >
                            <div className={pStyles.bubbleWrap2} >
                                <div className={pStyles.bubbleLinkWrap}>
                                    <a onClick={getAttackPrompt} className={pStyles.bubbleLink}>CASSADY sends out Charizard!
                                    </a>
                                </div>
                                <span className={pStyles.textContinue}></span>
                            </div>
                        </div>
                    </div>
                </div>
            )        
        }

        if (battlePhase == BattlePhases.playerAttack) {
            return (
                <div className='d-flex flex-wrap'>
                <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                    <div className={pStyles.bubbleWrap1} >
                        <div className={pStyles.bubbleWrap2} >
                            <div className={pStyles.bubbleLinkWrap}>
                                <div onClick={playerAttackFinished} className={pStyles.bubbleLink}>Margikarp used Splash</div>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
            )       
        }

        return (
            <div className='d-flex flex-wrap'>
                <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                    <div className={pStyles.bubbleWrap1} >
                        <div className={pStyles.bubbleWrap2} >
                            <div className={pStyles.bubbleLinkWrap}>
                                <div onClick={playerAttackFinished} className={pStyles.bubbleLink}>Margikarp used Splash</div>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
        )          
    }

    function playerAttackFinished() {
        setBattlePhase();
    }


    function startBattle() {
        setIsBattling(true);
    }


    return (
        <div className={'min-vh-100 col-12 d-flex justify-content-center align-items-center'}>
            {
                isBattling
                ?
                <div className='col-8   '>   
                    {renderPokemon()}
                    {initBattle()}
                </div>
                
                :
                promptForBattle()
            }

        </div>
    );
};



export default PokemonBattle