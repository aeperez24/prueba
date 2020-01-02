import React from 'react';
import Select from '@material-ui/core/Select';


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
        return <Select onChange={props.handler}>
                {Array.from(set.values()).map(s=><option value ={s}>{s}</option>)}
            </Select>;
}

export default VersionSelector;