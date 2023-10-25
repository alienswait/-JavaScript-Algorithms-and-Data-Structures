function validAnagram(first, second){

    if(first.lenght !== second.lenght){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.lenght; i++){
        let letter = first[i];
        // if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] +1 : lookup[letter] = 1;

    }

    console.log(lookup)

    for (let i = 0; i < second.lenght; i++){
        let letter = second[i];
        // can't find letter or letter is zero then its not an anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }

    return true;


    
}

validAnagram('anagram', 'nagaram')