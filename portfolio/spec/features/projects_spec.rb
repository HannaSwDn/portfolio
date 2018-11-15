describe 'Projects Page', type: :feature do
    it 'displays a header' do
        visit '/'

        expect(page).to have_css '#projects_header'
        within '#projects_header' do
            expect(page).to have_content 'projects'
        end
    end

    it 'displays projects' do
        visit '/'

        expect(page).to have_css '.project'
        within '.project' do
            expect(page).to have_content 'FizzBuzz'
        end
    end
end