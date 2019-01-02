describe 'Projects Page', type: :feature do
    it 'displays a header' do
        visit 'projects.html'

        within '.middle' do
            expect(page).to have_content 'projects'
        end
    end

    it 'displays projects' do
        visit 'projects.html'

        within '.projects' do
            expect(page).to have_content 'FizzBuzz'
            expect(page).to have_content 'Number Memory Test'
            expect(page).to have_content 'Library Challenge'
            expect(page).to have_content 'care2share'
        end
    end
end