export const INQUIRIES = [
    {
        "branch": null,
        "is_branching": true,
        "order": 1,
        "context_text": "In a chemical reaction, what is the term used to describe the starting substances?",
        "prompt": "The starting substances in a chemical reaction are called..."
    },
    {
        "branch": 1,
        "is_branching": false,
        "order": 1,
        "context_text": "give a context",
        "prompt": "give a prompt"
    },
    {
        "branch": 2,
        "is_branching": false,
        "order": 1,
        "context_text": "give a context",
        "prompt": "give a prompt"
    },
    {
        "branch": 1,
        "is_branching": false,
        "order": 2,
        "context_text": "Good job! Now, what is the term used to describe the substances formed in a chemical reaction?",
        "prompt": "The substances formed in a chemical reaction are called..."
    }
]


export const BRANCHES = [
    {   
        "id" : 1,
        "parent_inquiry": 1,
        "is_correct": true
    },
    {
        "id" : 2,
        "parent_inquiry": 1,
        "is_correct": false
    }
]