export function clearEducationField(func) {
    func({
        degree: '',
        school: '',
        city: '',
        country: '',
        from: '',
        until: '',
    });
}

export function clearExperienceField(func) {
    func ({
        jobTitle: '',
        company: '',
        location: '',
        description: '',
        from: '',
        until: '',
    })
}


export function checkFields(field) {
    return !Object.values(field).some(value => value === '') || (alert('Please fill all the fields!'), false);
}