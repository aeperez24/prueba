import React from 'react';

const VersionSelector=(props)=>{
    const set = new Set();
    const lst = [];
    const arrVersions = props.moves.map(move=>move.versions.map(version=>version.name));
    arrVersions.forEach(s=>s.forEach(element => {set.add(element)}));
    if(props.versionSelected==null && set.size>0) {
            const defaultVersion ={'target':{'value':set.values().next().value}};
            if(defaultVersion!=null)
                props.handler(defaultVersion);
    }
        return <select onChange={props.handler}>
                {Array.from(set.values()).map(s=><option value ={s}>{s}</option>)}
            </select>;
}

export default VersionSelector;