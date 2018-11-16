describe 'Projects Page', type: :feature do
    it 'displays a header' do
        visit '/'

        within '.middle' do
            expect(page).to have_content 'projects'
        end
    end

    it 'displays projects' do
        visit '/'

        within '.project' do
            expect(page).to have_content 'FizzBuzz'
        end
    end
end