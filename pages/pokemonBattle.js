import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import pStyles from '../styles/PokemonBattle.module.css';
import 'animate.css'
import React, { useState } from 'react';
import charizardBack from '../public/pokemon/charizardBack.gif';
import charizardFront from '../public/pokemon/charizardFront.gif';
import magikarpBack from '../public/pokemon/MagikarpBack.gif';
import magikarpAttack from '../public/pokemon/magikarpAttack.gif';
import { ProgressBar } from 'react-bootstrap';

const PokemonBattle = ({ }) => {
    const BattlePhases = {
        cassadySendsOutPokemon: 0,
        chooseAction: 1,
        chooseAttack: 2,
        playerAttack: 3,
        cassadyAttack: 4,
        playerAttack2: 5,
        playerPokemonLose: 6,
    }
    const charizard = {
        name: "Charizard",
        currentHealth: 100,
        health: 100,
        image: charizardFront,
        imageAttack: charizardFront,
    }
    const Magikarp = {
        name: "Magikarp",
        currentHealth: 100,
        health: 100,
        image: magikarpBack,
        imageAttack: magikarpAttack
    }
    const [isBattling, setIsBattling] = useState(false);
    const [battlePhase, setBattlePhase] = useState(BattlePhases.cassadySendsOutPokemon);
    const [playerPokemon, setPlayerPokemone] = useState(Magikarp);
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
        cassadyPokemon.currentHealth -= 25;
        setBattlePhase(BattlePhases.playerAttack)
    }

    function getImage(pokemon) {
        console.log("pokemon: " + pokemon.name);
        console.log("pokemon: " + pokemon.imageAttack);
        switch(battlePhase) {
            case battlePhase == BattlePhases.playerAttack:
                return playerPokemon.imageAttack;
            
            default:
                return playerPokemon.image;
        }
    }

    const renderPokemon = () => {
        var image = getImage(playerPokemon);
        console.log("image : " + image.toString());
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
                        src={battlePhase == BattlePhases.playerAttack ? playerPokemon.imageAttack : playerPokemon.image}
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
        console.log("battlePhase " + battlePhase); 
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
                                <div onClick={playerAttackFinished} className={pStyles.bubbleLink}>Magikarp used Splash</div>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
            )       
        }

        if (battlePhase == BattlePhases.cassadyAttack) {
            return (
                <div className='d-flex flex-wrap'>
                <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                    <div className={pStyles.bubbleWrap1} >
                        <div className={pStyles.bubbleWrap2} >
                            <div className={pStyles.bubbleLinkWrap}>
                                <div onClick={cassadyAttackFinished} className={pStyles.bubbleLink}>Charizard used flamethrower!</div>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
            )
        }

        if (battlePhase == BattlePhases.playerAttack2) {
            return (
                <div className='d-flex flex-wrap'>
                <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                    <div className={pStyles.bubbleWrap1} >
                        <div className={pStyles.bubbleWrap2} >
                            <div className={pStyles.bubbleLinkWrap}>
                                <div onClick={playerAttack2Finished} className={pStyles.bubbleLink}>Magikarp used Tackle</div>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
            ) 
        }

        if (battlePhase == BattlePhases.cassadyAttack2) {
            return (
                <div className='d-flex flex-wrap'>
                <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                    <div className={pStyles.bubbleWrap1} >
                        <div className={pStyles.bubbleWrap2} >
                            <div className={pStyles.bubbleLinkWrap}>
                                <a href="/index2" className={pStyles.bubbleLink}>Charizard used Fire blast</a>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
            ) 
        }

        if (battlePhase == BattlePhases.playerPokemonLose) {
            return (
                <div className='d-flex flex-wrap'>
                <div className='col-12 my-5 d-flex justify-content-center align-items-center'>
                    <div className={pStyles.bubbleWrap1} >
                        <div className={pStyles.bubbleWrap2} >
                            <div className={pStyles.bubbleLinkWrap}>
                                <div onClick={playerPokemonLose} className={pStyles.bubbleLink}>Magikarp Fainted!</div>
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
                                <div onClick={playerAttackFinished} className={pStyles.bubbleLink}>Unknown state error, oopsies!</div>
                            </div>
                            <span className={pStyles.textContinue}></span>
                        </div>
                    </div>
                </div>
            </div>
        )          
    }

    function playerAttackFinished() {
        playerPokemon.currentHealth -= 90;
        setBattlePhase(BattlePhases.cassadyAttack);
    }

    function playerAttack2Finished() {
        cassadyPokemon.currentHealth -= 5;
        setBattlePhase(BattlePhases.cassadyAttack2);
    }

    function cassadyAttackFinished() {
        setBattlePhase(BattlePhases.playerAttack2);
    }

    function cassadyAttack2Finished() {
        playerPokemon.currentHealth = 0;
        setBattlePhase(BattlePhases.playerPokemonLose);
    }

    function playerPokemonLose() {
        alert("finished");
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