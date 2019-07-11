let officers = [
   {id: 20, name: 'Captain Piett' },
   { id: 24, name: 'General Veers' },
   { id: 56, name: 'Admiral Ozzel'},
   { id: 88, name: 'Commander Jerjerrod'},
]

let officerID = []

// officers.forEach(officer => officerID.push(officer.id));

for (let index in officers) {
officerID.push(officer[index].id)
  }

  console.log(officerID)

